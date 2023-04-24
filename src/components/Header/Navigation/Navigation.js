
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { endpoints } from '../../../constans/pathContent';

function Navigation({ activePath, openMenu }) {

  const navlinkClassName = ({ isActive }) => `navigation__link link ${isActive ? 'navigation__link_active' : ''}`;

  return (
    <div className='navigation'>
      <NavLink to={endpoints.ABOUT} className='header__logo' />
      <div className='navigation__menu navigation__menu_open'>
        <ul className='navigation__links'>
          <li key={0}>
            <NavLink
              to={endpoints.MOVIES}
              className={navlinkClassName}>
              Фильмы
            </NavLink>
          </li>
          <li key={1}>
            <NavLink
              to={endpoints.SAVED_MOVIES}
              className={navlinkClassName}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink
        to={endpoints.PROFILE}
        className='navigation__button button'>
        Аккаунт
      </NavLink>
      <div className='navigation__burger button' onClick={openMenu}>
        <button className='navigation__button-menu button'>
          <div className='navigation__line'></div>
          <div className='navigation__line'></div>
          <div className='navigation__line'></div>
        </button>
      </div >

    </div >
  );
}

export default Navigation;
