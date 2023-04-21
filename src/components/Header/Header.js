
import { NavLink, Route, Routes } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { endpoints } from '../../constans/pathContent';

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
          <Navigation activePath={endpoints.MOVIES} openMenu={openMenu} />} />
        <Route path={endpoints.SAVED_MOVIES} element={
          <Navigation activePath={endpoints.SAVED_MOVIES} openMenu={openMenu} />} />
        <Route path={endpoints.PROFILE} element={
          <Navigation activePath={endpoints.PROFILE} openMenu={openMenu} />} />
      </Routes>
    </header>
  );
}

export default Header;
