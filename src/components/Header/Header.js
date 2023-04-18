
import { NavLink, Route, Routes } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ openMenu }) {
  return (
    <div className="header">
      <Routes>
        <Route path='/' element={
          <div className='header__main'>
            <div className='header__container container'>
              <NavLink to="/" className='header__logo' />
              <NavLink to="/signup" className='header__link_fon_black link'>Регистрация</NavLink>
              <NavLink to="/signin" className='header__button-signin button'>Войти</NavLink>
            </div>
          </div>} />
        <Route path='/movies' element={
          <Navigation activePath='movies' openMenu={openMenu} />} />
        <Route path='/saved-movies' element={
          <Navigation activePath='saved-movies' openMenu={openMenu} />} />
        <Route path='/profile' element={
          <Navigation activePath='profile' openMenu={openMenu} />} />
      </Routes>
    </div>
  );
}

export default Header;
