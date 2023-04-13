
import { NavLink, Route, Routes } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <div className="header">
      <Routes>
        <Route path='/' element={
          <div className='header__main'>
            <div className='header__container'>
              <NavLink to="/" className='header__logo' />
              <NavLink to="/" className='header__link_fon_black link'>Регистрация</NavLink>
              <button className='header__button button'>Войти</button>
            </div>
          </div>} />
        <Route path='/movies' element={
          <Navigation activePath='movies' />} />
        <Route path='/saved-movies' element={
          <Navigation activePath='saved-movies' />} />
        <Route path='/profile' element={
          <Navigation activePath='profile' />} />
      </Routes>
    </div>
  );
}

export default Header;
