
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ activePath }) {
  return (
    <div className='navigation'>
      <NavLink to="/" className='header__logo' />
      <div className='navigation_links'>
        <NavLink
          to="/movies"
          className={`navigation__link link ${activePath === 'movies' && 'navigation__link_active'}`}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={`navigation__link link ${activePath === 'saved-movies' && 'navigation__link_active'}`}
        >
          Сохранённые фильмы
        </NavLink>
      </div>

      <NavLink
        to="/profile"
        className='navigation__button button'>
        Аккаунт
      </NavLink>
    </div>
  );
}

export default Navigation;
