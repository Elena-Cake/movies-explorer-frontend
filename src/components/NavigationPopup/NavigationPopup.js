
import { NavLink, useNavigate } from 'react-router-dom';
import './NavigationPopup.css';
import { endpoints } from '../../constans/pathContent';

function NavigationPopup({ isMenuOpen, closeMenu }) {


  // !!!КОСТЫЛЬ!!!
  const navigate = useNavigate();
  const goAbout = (e) => {
    navigate(endpoints.ABOUT);
    closeMenu(e)
  }
  const goMovies = (e) => {
    navigate(endpoints.MOVIES);
    closeMenu(e)
  }
  const goSavedMovies = (e) => {
    navigate(endpoints.SAVED_MOVIES);
    closeMenu(e)
  }
  const goProfile = (e) => {
    e.preventDefault()
    navigate(endpoints.PROFILE);
    closeMenu(e)
  }

  const navlinkClassName = ({ isActive }) => `menu__link link ${isActive ? 'menu__link_active' : ''}`;

  return (
    <div className={`popup-wrapper ${isMenuOpen ? 'popup-wrapper_open' : ''}`}>
      <div className='popup__container-menu'>
        <button className='menu__button-close button' onClick={closeMenu}></button>
        <ul className='menu__links'>
          <li className='menu__link-li' key={0}>
            <NavLink
              to={endpoints.ABOUT}
              className={navlinkClassName}
              onClick={goAbout}>
              Главная
            </NavLink>
          </li>
          <li className='menu__link-li' key={1}>
            <NavLink
              to={endpoints.MOVIES}
              className={navlinkClassName}
              onClick={goMovies}>
              Фильмы
            </NavLink>
          </li>
          <li className='menu__link-li' key={2}>
            <NavLink
              to={endpoints.SAVED_MOVIES}
              className={navlinkClassName}
              onClick={goSavedMovies}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div
          className='menu__button button'
          onClick={goProfile} >
          Аккаунт
        </div>
      </div>
    </div>
  );
}

export default NavigationPopup;
