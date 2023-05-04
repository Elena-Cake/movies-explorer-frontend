
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { endpoints } from '../../constans/pathContent';

function Navigation({ activePath, openMenu }) {

  return (
    <div className='navigation'>
      <NavLink to="/" className='header__logo' />
      <div className='navigation__menu navigation__menu_open'>
        <div className='navigation__links-wrapper'>
          <div className='navigation__links'>
            <NavLink
              to={endpoints.MOVIES}
              className={`navigation__link link ${activePath === 'movies' && 'navigation__link_active'}`}>
              Фильмы
            </NavLink>
            <NavLink
              to={endpoints.SAVED_MOVIES}
              className={`navigation__link link ${activePath === 'saved-movies' && 'navigation__link_active'}`}>
              Сохранённые фильмы
            </NavLink>
          </div>
        </div>
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
