
import { NavLink, Route, Routes } from 'react-router-dom';
import './Header.css';
import { endpoints } from '../../constans/pathContent';
import Navigation from './Navigation/Navigation';

function Header({ openMenu }) {
  return (
    <header className="header">
      <Routes>
        <Route path={endpoints.ABOUT} element={
          <div className='header__main'>
            <div className='header__container container'>
              <NavLink to="/" className='header__logo' />
              <NavLink to="/signup" className='header__link_fon_black link'>Регистрация</NavLink>
              <NavLink to="/signin" className='header__button-signin button'>Войти</NavLink>
            </div>
          </div>} />
        <Route path={endpoints.MOVIES} element={
          <Navigation activePath='movies' openMenu={openMenu} />} />
        <Route path={endpoints.SAVED_MOVIES} element={
          <Navigation activePath='saved-movies' openMenu={openMenu} />} />
        <Route path={endpoints.PROFILE} element={
          <Navigation activePath='profile' openMenu={openMenu} />} />
      </Routes>
    </header>
  );
}

export default Header;
