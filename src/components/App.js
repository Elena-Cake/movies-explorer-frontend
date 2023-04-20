
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { useState } from 'react';
import Footer from './Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  // данные профиля
  const [currentUser, setCurrentUser] = useState({});

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header openMenu={openMenu} />
        <Main isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
