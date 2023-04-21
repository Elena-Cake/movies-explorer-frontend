
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
import { CONNECTION, CREATED, OK } from '../constans/statusData';

function App() {

  // авторизация и вход
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();
  const [infoToolImageType, setInfoToolImageType] = useState("err");
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

  // регистрация
  function onSubmitRegister(dataForm) {
    const { name, email, password } = dataForm
    createUser({ name, email, password })
      .then((res) => {
        if (res) {
          setIsSignIn(true)
          setInfoToolText(CREATED.USER_MESSAGE)
        }
      })
      .then(() => {
        onSubmitLogin(email, password)
      })
      .catch(() => {
        setIsSignIn(false)
        appointErrInfoTool()
      })
      .finally(() => setIsInfoTooltipOpen(true))
  }

  // авторизация
  function onSubmitLogin(dataForm) {
    const { email, password } = dataForm
    login({ password, email })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsSignIn(true);
        setInfoToolText(OK.MESSAGE)
        navigate('/movies', { replace: true });
      })
      // .then(() => pullInitialData())
      .catch((res) => {
        appointErrInfoTool()
        setIsInfoTooltipOpen(true);
        setIsSignIn(false);
      })
      .finally(() => setIsInfoTooltipOpen(true))
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
