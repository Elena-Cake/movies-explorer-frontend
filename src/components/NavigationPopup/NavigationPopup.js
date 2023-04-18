
import { NavLink, Route, Routes } from 'react-router-dom';
import './NavigationPopup.css';

function NavigationPopup({ isMenuOpen, toggleMenu }) {
  return (
    <div className={`popup-wrapper ${isMenuOpen ? 'popup-wrapper_open' : ''}`}>
      <div className='popup__container'>
        <button className='menu__button-close button' onClick={toggleMenu}>&#x2715;</button>
        <ul className='menu__links'>
          <li className='menu__link-li '>
            <NavLink
              to="/"
              className='menu__link link'>
              Главная
            </NavLink>
          </li>
          <li className='menu__link-li'>
            <NavLink
              to="/movies"
              className='menu__link link menu__link_active'>
              Фильмы
            </NavLink>
          </li>
          <li className='menu__link-li'>
            <NavLink
              to="/saved-movies"
              className='menu__link link'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/profile"
          className='menu__button button' >
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationPopup;
