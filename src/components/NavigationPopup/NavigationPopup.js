
import { NavLink } from 'react-router-dom';
import './NavigationPopup.css';
import { endpoints } from '../../constans/pathContent';

function NavigationPopup({ isMenuOpen, closeMenu }) {

  const navlinkClassName = ({ isActive }) => `menu__link link ${isActive ? 'menu__link_active' : ''}`;

  return (
    <div className={`popup-wrapper ${isMenuOpen ? 'popup-wrapper_open' : ''}`}>
      <div className='popup__container-menu'>
        <button className='menu__button-close button' onClick={closeMenu}></button>
        <ul className='menu__links'>
          <li className='menu__link-li '>
            <NavLink
              to={endpoints.ABOUT}
              className={navlinkClassName}
              onClick={closeMenu}>
              Главная
            </NavLink>
          </li>
          <li className='menu__link-li'>
            <NavLink
              to={endpoints.MOVIES}
              className={navlinkClassName}
              onClick={closeMenu}>
              Фильмы
            </NavLink>
          </li>
          <li className='menu__link-li'>
            <NavLink
              to={endpoints.SAVED_MOVIES}
              className={navlinkClassName}
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
