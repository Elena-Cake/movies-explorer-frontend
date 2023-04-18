
import { NavLink, Route, Routes } from 'react-router-dom';
import './Navigation.css';
import { useState } from 'react';

function Navigation({ activePath, toggleMenu }) {

  return (
    <div className='navigation'>
      <NavLink to="/" className='header__logo' />
      <div className='navigation__menu navigation__menu_open'>
        <div className='navigation__links-wrapper'>
          <div className='navigation__links'>
            <NavLink
              to="/movies"
              className={`navigation__link link ${activePath === 'movies' && 'navigation__link_active'}`}>
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={`navigation__link link ${activePath === 'saved-movies' && 'navigation__link_active'}`}>
              Сохранённые фильмы
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink
        to="/profile"
        className='navigation__button button'>
        Аккаунт
      </NavLink>
      <div className='navigation__burger button' onClick={toggleMenu}>
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
