
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
import { createMovieDTO } from '../constans/movie';

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

  const [isTimePullMovies, setIsTimePullMovies] = useState(false)
  const [isTimeUpdateAllMovies, setIsTimeUpdateAllMovies] = useState(false)

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
        pullInitialData()
      })
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
            setIsSignIn(true);
            pullInitialData();
            navigate({ replace: false })
          }
        })
        .catch((err) => {
          setIsSignIn(false);
          navigate("/", { replace: false })
        })
    }
  }, [])

  // удаление токена при выходе из аккаунта
  function logOut(e) {
    e.preventDefault();
    setIsSignIn(false);
    localStorage.clear();
    setSavedMovies([]);
    setAllMovies([]);
    navigate("/", { replace: false });
  }

  // ____Profile____

  const handleEditMode = () => setIsEditMode(true)
  const handleEditModeOff = () => setIsEditMode(false)

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
  // _____загрузка данных____
  const pullInitialData = () => {
    setIsPreloaderActive(true)
    Promise.all([getProfile(), getMovies()])
      .then(([user, savedMovies]) => {
        setCurrentUser(user)
        setSavedMovies(savedMovies.map((movie) => { return { ...movie, isSaved: true } }))
      })
      .catch((err) => {
        setInfoToolText(CONNECTION.MESSAGE_AGAIN)
        setIsInfoTooltipOpen(true);
        setTimeout(() => setIsInfoTooltipOpen(false), 1000);
      })
      .finally(() => setIsPreloaderActive(false))
  }

  // загрузка фильмов при первом поиске
  const pullAllMovies = () => {
    setIsTimePullMovies(true)
  }
  useEffect(() => {
    if (isTimePullMovies) {
      const idsSavedMovies = savedMovies.map((movie) => movie.movieId);
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
      setIsTimePullMovies(false)
    }
  }, [isTimePullMovies])


  // _____Ations (movies): like and delete_____

  // добавление фильма в сохраненные
  const handleLike = (dataMovie, callback) => {
    delete dataMovie.isSaved
    setIsPreloaderActive(true)
    createMovie(dataMovie)
      .then((newMovie) => {
        setAllMovies(allMovies.map(movie => movie.movieId === newMovie.movieId ? { ...movie, isSaved: true } : movie))
        setSavedMovies([newMovie, ...savedMovies])
        callback(true)
      })
      .catch((res) => {
        console.log(res)
        callback(false)
      })
      .finally(setIsPreloaderActive(false))
  }

  // удаление фильма из сохраненных
  const handleDelete = (movieId, callback) => {
    setIsPreloaderActive(true)
    deleteMovie(movieId)
      .then(res => {
        setSavedMovies(savedMovies.filter((movie) => movie.movieId !== res.movie.movieId))
        setAllMovies(allMovies.map(movie => movie.movieId === res.movie.movieId ? { ...movie, isSaved: false } : movie))
        callback(true)
      })
      .catch((res) => {
        callback(false)
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

            textErrorAuth={textErrorAuth}
            deleteErrorSubmit={deleteErrorSubmit}
            isEditMode={isEditMode}
            handleEditMode={handleEditMode}
            handleEditModeOff={handleEditModeOff}

            handleLike={handleLike}
            handleDelete={handleDelete}
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
