
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import './Main.css';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import NotFound from '../NotFound/NotFound';
import NavigationPopup from '../NavigationPopup/NavigationPopup';

function Main({ isMenuOpen, closeMenu }) {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <div className="main">
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </div>
        } />
        <Route path='/movies' element={
          <Movies />
        } />
        <Route path='/saved-movies' element={
          <SavedMovies />
        } />
        <Route path='/profile' element={
          <Profile />
        } />
        <Route path='/signin' element={
          <Login />
        } />
        <Route path='/signup' element={
          <Register />
        } />
        <Route path='*' element={
          <NotFound />
        } />
      </Routes>

      <NavigationPopup isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
}

export default Main;
