
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
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

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
  // ошибка для InfoTooltip
  function appointErrInfoTool() {
    setInfoToolText(CONNECTION.MESSAGE)
  }

  // ________AUTH___________

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
          appointErrInfoTool()
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
        setInfoToolText(OK.MESSAGE)
        navigate('/movies', { replace: true });

        setIsInfoTooltipOpen(true);
        setTimeout(setIsInfoTooltipOpen(false), 3000);
      })
      .then(() => pullInitialData())
      .catch((res) => {
        appointErrInfoTool()
        setIsInfoTooltipOpen(true);
        setIsSignIn(false);
      })
      .finally(() => setIsPreloaderActive(false))
  }

  // проверка токена
  useEffect(() => {
    if (jwt) {
      getProfile()
        .then((res) => {
          if (res) {
            setIsSignIn(true);
            pullInitialData()
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/", { replace: true })
        })
    }
  }, [])

  // удаление токена при выходе из аккаунта
  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    navigate("/", { replace: false })
  }

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
  const pullInitialData = () => {
    setIsPreloaderActive(true)
    Promise.all([getMoviesAll(), getProfile(), getMovies()])
      .then(([movies, user, savedMoves]) => {
        setCurrentUser(user)
        const idsSavedMovies = savedMoves.map((movie) => movie.movieId)
        setMovies(movies.map(movie => createMovieDTO(movie, idsSavedMovies))
        )
        setSavedMovies(savedMoves)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsPreloaderActive(false))
  }

  const handleEditMode = () => setIsEditMode(true)

  // обновление профиля
  function onUpdateUser({ values }) {
    setIsPreloaderActive(true)
    updateProfile(values)
      .then((user) => {
        setCurrentUser(user)
        setTextErrorAuth('')
        setIsEditMode(false)
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

  const [timeGetIdToDelete, setTimeGetIdToDelete] = useState(false)
  const [currentMovie, setCurrentMovie] = useState({})
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
    createMovie(dataMovie)
      .then((res) => {
        console.log('add', res)
        setMovies(movies.map(movie => movie.movieId === res.movieId ? { ...movie, isSaved: true } : movie))
        getMovies()
          .then((savedMoves) => {
            setSavedMovies(savedMoves)
          })
      })
      .catch((res) => {
        console.log(res)
      })
  }

  // удаление фильма из сохраненных
  const handleDeleteMovie = (movieId) => {
    deleteMovie(movieId)
      .then(res => {
        setSavedMovies(savedMovies.filter((movie) => movie.movieId !== res.movie.movieId))
        setMovies(movies.map(movie => movie.movieId === res.movie.movieId ? { ...movie, isSaved: false } : movie))
        console.log('delete', res)
      })
      .catch((res) => {
        console.log(res)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header openMenu={openMenu} />
        <Main
          isMenuOpen={isMenuOpen} closeMenu={closeMenu}
          onSubmitLogin={onSubmitLogin} onSubmitRegister={onSubmitRegister}
          textErrorAuth={textErrorAuth} deleteErrorSubmit={deleteErrorSubmit} logOut={logOut}
          onUpdateUser={onUpdateUser} isEditMode={isEditMode} handleEditMode={handleEditMode}
          movies={movies} savedMovies={savedMovies}
          handleLike={handleLike} handleDelete={handleDeleteMovie}
        />
        <Footer />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          isSignIn={isSignIn}
          text={infoToolText} />

        <Preloader isActive={isPreloaderActive} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
