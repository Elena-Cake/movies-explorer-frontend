
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { useEffect, useState } from 'react';
import Footer from './Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import { createUser, getProfile, login, updateProfile, getMovies, createMovie, deleteMovie } from '../utils/MainApi';
import InfoTooltip from './InfoTooltip/InfoTooltip';
import { getMoviesAll } from '../utils/MoviesApi';
import { CONFLICT, CONNECTION, CREATED, NO_VALIDATE, OK } from '../constans/statusData';
import Preloader from './Preloader/Preloader';
import { MoviesContext } from '../contexts/MoviesContext';
import { UNAUTHORIZED } from '../constans/statusData';

function App() {

  // авторизация и вход
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();
  const [textErrorAuth, setTextErrorAuth] = useState("");
  const jwt = localStorage.getItem('jwt');

  // прелоадер
  const [isPreloaderActive, setIsPreloaderActive] = useState(false)

  // данные профиля
  const [currentUser, setCurrentUser] = useState({});
  const [isEditMode, setIsEditMode] = useState(false)

  // фильмы
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  // фильм
  const [timeGetIdToDelete, setTimeGetIdToDelete] = useState(false)
  const [currentMovie, setCurrentMovie] = useState({})

  // отображение бургера
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(true)
  }
  const closeMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
  }

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const closeInfoTooltip = () => {
    setIsInfoTooltipOpen(false)
  }

  const [infoToolText, setInfoToolText] = useState("Info");


  // успех для InfoPopup
  function openSucsessInfoTooltip() {
    setInfoToolText(OK.MESSAGE)
    setIsInfoTooltipOpen(true);
    setTimeout(() => setIsInfoTooltipOpen(false), 1000);
  }

  // ________AUTH___________

  // ошибка соединения для ErrorSubmit
  function appointErrorSubmit() {
    setInfoToolText(CONNECTION.MESSAGE)
  }

  // удалить ошибку в форме логина
  const deleteErrorSubmit = () => {
    setTextErrorAuth('')
  }

  // регистрация
  function onSubmitRegister(dataForm) {
    setIsPreloaderActive(true)
    setInfoToolText('')
    const { name, email, password } = dataForm
    createUser({ name, email, password })
      .then((res) => {
        if (res) {
          setIsSignIn(true)
          setInfoToolText(CREATED.USER_MESSAGE)
        }
      })
      .then(() => {
        onSubmitLogin({ email, password })
      })
      .catch((res) => {
        if (res === 400) {
          setTextErrorAuth(NO_VALIDATE.VALIDATION)
        } else if (res === 409) {
          setTextErrorAuth(CONFLICT.MESSAGE)
        } else {
          appointErrorSubmit()
        }
        setIsSignIn(false)
      })
      .finally(() => setIsPreloaderActive(false))
  }

  // авторизация
  function onSubmitLogin(dataForm) {
    setIsPreloaderActive(true)
    setInfoToolText('')
    const { email, password } = dataForm
    login({ password, email })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsSignIn(true);
        navigate('/movies', { replace: true });
        openSucsessInfoTooltip();
      })
      .then(() => pullInitialData())
      .catch((res) => {
        if (res === 400) {
          setTextErrorAuth(NO_VALIDATE.VALIDATION)
        } else if (res === 401) {
          setTextErrorAuth(UNAUTHORIZED.MESSAGE_AUTH)
        } else if (res === 409) {
          setTextErrorAuth(CONFLICT.MESSAGE)
        } else {
          appointErrorSubmit()
        }
        setIsSignIn(false)
      })
      .finally(() => setIsPreloaderActive(false))
  }

  // проверка токена
  useEffect(() => {
    if (jwt) {
      getProfile()
        .then((res) => {
          if (res) {
            console.log('token')
            setIsSignIn(true);
            pullInitialData()
          }
        })
        .catch((err) => {
          console.log(err);
          setIsSignIn(false);
          navigate("/", { replace: true })
        })
    }
  }, [])

  // удаление токена при выходе из аккаунта
  function logOut(e) {
    e.preventDefault();
    setIsSignIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("filters-movie-saved");
    localStorage.removeItem("filters-movie");
    navigate("/", { replace: false });
  }

  // ____Profile____

  const handleEditMode = () => setIsEditMode(true)

  // обновление профиля
  function onUpdateUser({ values }) {
    setIsPreloaderActive(true)
    updateProfile(values)
      .then((user) => {
        setCurrentUser(user);
        setTextErrorAuth('');
        setIsEditMode(false);
        openSucsessInfoTooltip();
      })
      .catch((res) => {
        console.log(res)
        if (res === 400) {
          setTextErrorAuth(NO_VALIDATE.VALIDATION)
        } else if (res === 409) {
          setTextErrorAuth(CONFLICT.MESSAGE)
        } else {
          setTextErrorAuth(CONNECTION.MESSAGE)
        }
      })
      .finally(() => setIsPreloaderActive(false))
  }

  // _____Pull movies_____

  const createMovieDTO = (movie, idsSavedMovies) => {
    return {
      country: movie.country || 'unknow',
      director: movie.director || 'unknow',
      duration: movie.duration,
      year: movie.year,
      description: movie.description || 'unknow',
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
      movieId: movie.id,
      nameRU: movie.nameRU || 'unknow',
      nameEN: movie.nameEN || 'unknow',
      isSaved: idsSavedMovies.includes(movie.id)
    }
  }

  // _____загрузка данных____
  let idsSavedMovies = []

  const pullInitialData = () => {
    setIsPreloaderActive(true)
    Promise.all([getProfile(), getMovies()])
      .then(([user, savedMoves]) => {
        setCurrentUser(user)
        idsSavedMovies = savedMoves.map((movie) => movie.movieId);
        setSavedMovies(savedMoves.map((movie) => { return { ...movie, isSaved: true } }))
      })
      .catch((err) => {
        setInfoToolText(CONNECTION.MESSAGE_AGAIN)
        setIsInfoTooltipOpen(true);
        setTimeout(() => setIsInfoTooltipOpen(false), 1000);
      })
      .finally(() => setIsPreloaderActive(false))
  }

  const pullAllMovies = () => {
    setIsPreloaderActive(true)
    getMoviesAll()
      .then((movies) => {
        setAllMovies(movies.map(movie => createMovieDTO(movie, idsSavedMovies))
        )
      })
      .catch((err) => {
        setInfoToolText(CONNECTION.MESSAGE_AGAIN)
        setIsInfoTooltipOpen(true);
        setTimeout(() => setIsInfoTooltipOpen(false), 1000);
      })
      .finally(() => setIsPreloaderActive(false))
  }

  // _____Ations (movies): like and delete_____

  // нажатие лайка
  const handleLike = (dataMovie) => {
    if (dataMovie.isSaved) {
      setCurrentMovie(dataMovie)
      setTimeGetIdToDelete(true)
    }
    else {
      handleAddMovie(dataMovie)
    }
  }

  // достать айди для удаления лайка
  useEffect(() => {
    if (timeGetIdToDelete) {
      let idSavedMovie = 0
      savedMovies.forEach((movie) => {
        if (currentMovie.movieId === movie.movieId) {
          idSavedMovie = movie.coumovieId
        }
      })
      handleDeleteMovie(idSavedMovie)
      setTimeGetIdToDelete(false)
    }
  }, [timeGetIdToDelete])

  // добавление фильма в сохраненные
  const handleAddMovie = (dataMovie) => {
    delete dataMovie.isSaved
    setIsPreloaderActive(true)
    createMovie(dataMovie)
      .then((newMovie) => {
        setAllMovies(allMovies.map(movie => movie.movieId === newMovie.movieId ? { ...movie, isSaved: true } : movie))
        setSavedMovies([newMovie, ...savedMovies])
      })
      .catch((res) => {
        console.log(res)
      })
      .finally(setIsPreloaderActive(false))
  }

  // удаление фильма из сохраненных
  const handleDeleteMovie = (movieId) => {
    setIsPreloaderActive(true)
    deleteMovie(movieId)
      .then(res => {
        setSavedMovies(savedMovies.filter((movie) => movie.movieId !== res.movie.movieId))
        setAllMovies(allMovies.map(movie => movie.movieId === res.movie.movieId ? { ...movie, isSaved: false } : movie))
        openSucsessInfoTooltip()
      })
      .catch((res) => {
        console.log(res)
      })
      .finally(setIsPreloaderActive(false))
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, onUpdateUser }}>
      <MoviesContext.Provider value={{ allMovies, savedMovies, pullAllMovies }}>
        <div className="page">
          <Header openMenu={openMenu} isSignIn={isSignIn} />
          <Main
            isSignIn={isSignIn}
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}

            onSubmitLogin={onSubmitLogin}
            onSubmitRegister={onSubmitRegister}
            logOut={logOut}
            deleteErrorSubmit={deleteErrorSubmit}

            textErrorAuth={textErrorAuth}
            isEditMode={isEditMode}
            handleEditMode={handleEditMode}

            handleLike={handleLike}
            handleDelete={handleDeleteMovie}
          />
          <Footer />

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeInfoTooltip}
            isSignIn={isSignIn}
            text={infoToolText} />

          <Preloader isActive={isPreloaderActive} />
        </div>
      </MoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
