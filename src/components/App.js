
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { useState } from 'react';
import Footer from './Footer/Footer';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="page">
      <Header openMenu={openMenu} />
      <Main isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <Footer />
    </div>
  );
}

export default App;
