
import { NavLink } from 'react-router-dom';
import './NavigationPopup.css';
import { endpoints } from '../../constans/pathContent';

function NavigationPopup({ isMenuOpen, closeMenu }) {
  return (
    <div className={`popup-wrapper ${isMenuOpen ? 'popup-wrapper_open' : ''}`}>
      <div className='popup__container-menu'>
        <button className='menu__button-close button' onClick={closeMenu}></button>
        <ul className='menu__links'>
          <li className='menu__link-li '>
            <NavLink
              to={endpoints.ABOUT}
              className='menu__link link'
              onClick={closeMenu}>
              Главная
            </NavLink>
          </li>
          <li className='menu__link-li'>
            <NavLink
              to={endpoints.MOVIES}
              className='menu__link link menu__link_active'
              onClick={closeMenu}>
              Фильмы
            </NavLink>
          </li>
          <li className='menu__link-li'>
            <NavLink
              to={endpoints.SAVED_MOVIES}
              className='menu__link link'
              onClick={closeMenu}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          to={endpoints.PROFILE}
          className='menu__button button'
          onClick={closeMenu} >
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationPopup;
