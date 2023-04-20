
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { useEffect, useState } from 'react';
import Footer from './Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import { createUser, getProfile, login } from '../utils/MainApi';
import InfoTooltip from './InfoTooltip/InfoTooltip';

function App() {

  // авторизация и вход
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();
  const [infoToolImageType, setInfoToolImageType] = useState("err");
  const jwt = localStorage.getItem('jwt');


  // данные профиля
  const [currentUser, setCurrentUser] = useState({});

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


  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(true);
  const closeInfoTooltip = () => {
    setIsInfoTooltipOpen(false)
  }

  const [infoToolText, setInfoToolText] = useState("Info");
  // ошибка для InfoTooltip
  function appointErrInfoTool() {
    setInfoToolText("Что-то пошло не так! Попробуйте ещё раз.")
  }

  // регистрация
  function handleRegisterClick(name, email, password) {
    createUser({ name, email, password })
      .then((res) => {
        if (res) {
          setIsSignIn(true)
          // setInfoToolText('Вы успешно зарегистрировались!')
          // setInfoToolImageType('ok')
        }
      })
      .then(() => {
        handleLoginClick(email, password)
      })
      .catch(() => {
        setIsSignIn(false)
        appointErrInfoTool()
      })
    // .finally(() => setIsInfoTooltipOpen(true))
  }

  // авторизация
  function handleLoginClick(email, password) {
    login({ password, email })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsSignIn(true);
        // setInfoToolText('Успешно!')
        // setInfoToolImageType('ok')
        navigate('/movies', { replace: true });
        // setEmailUser(email)
      })
      // .then(() => pullInitialData())
      .catch((res) => {
        // setIsInfoTooltipOpen(true);
        setIsSignIn(false);
        appointErrInfoTool()
      })
    // .finally(() => setIsInfoTooltipOpen(true))
  }

  // проверка токена
  useEffect(() => {
    if (jwt) {
      getProfile()
        .then((res) => {
          if (res) {
            setIsSignIn(true);
            // setEmailUser(res.email)
            // pullInitialData()
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
          handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} signOut={signOut}
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
