
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { useEffect, useState } from 'react';
import Footer from './Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import { createUser, getProfile, login } from '../utils/MainApi';
import InfoTooltip from './InfoTooltip/InfoTooltip';
import { getMoviesAll } from '../utils/MoviesApi';
import { CONFLICT, CONNECTION, CREATED, NO_VALIDATE, OK } from '../constans/statusData';

function App() {

  // авторизация и вход
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();
  const [textErrorAuth, setTextErrorAuth] = useState("");
  const jwt = localStorage.getItem('jwt');


  // данные профиля
  const [currentUser, setCurrentUser] = useState({});

  // фильмы
  const [movies, setMovies] = useState([]);

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
  }

  // авторизация
  function onSubmitLogin(dataForm) {
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
      // .then(() => pullInitialData())
      .catch((res) => {
        appointErrInfoTool()
        setIsInfoTooltipOpen(true);
        setIsSignIn(false);
      })
  }

  // проверка токена
  useEffect(() => {
    if (jwt) {
      getProfile()
        .then((res) => {
          if (res) {
            setIsSignIn(true);
            getMoviesAll()
              .then((res) => {
                console.log(res)
                // setMovies(res)
              })
            navigate("/movies", { replace: true })
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/", { replace: true })
        })
    }
  }, [])

  // удаление токена при выходе из аккаунта
  function signOut(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    navigate("/", { replace: false })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header openMenu={openMenu} />
        <Main
          isMenuOpen={isMenuOpen} closeMenu={closeMenu}
          onSubmitLogin={onSubmitLogin} onSubmitRegister={onSubmitRegister} signOut={signOut}
          textErrorAuth={textErrorAuth} deleteErrorSubmit={deleteErrorSubmit}
        />
        <Footer />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          isSignIn={isSignIn}
          text={infoToolText} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
