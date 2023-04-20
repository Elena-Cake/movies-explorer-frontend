
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
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function Main({ isMenuOpen, closeMenu, onSubmitLogin, onSubmitRegister }) {
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
          // <ProtectedRoute component={Movies} />
          <Movies />
        } />
        <Route path='/saved-movies' element={
          // <ProtectedRoute component={SavedMovies} />
          <SavedMovies />
        } />
        <Route path='/profile' element={
          // <ProtectedRoute component={Profile} />
          <Profile />
        } />
        <Route path='/signin' element={
          <Login onSubmitForm={onSubmitLogin} />
        } />
        <Route path='/signup' element={
          <Register onSubmitForm={onSubmitRegister} />
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
