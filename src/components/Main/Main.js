
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
import { endpoints } from '../../constans/pathContent';

function Main({ isMenuOpen, closeMenu, onSubmitLogin, onSubmitRegister }) {
  return (
    <div>
      <Routes>
        <Route path={endpoints.ABOUT} element={
          <div className="main-page">
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </div>
        } />
        <Route path={endpoints.MOVIES} element={
          // <ProtectedRoute component={Movies} />
          <Movies />
        } />
        <Route path={endpoints.SAVED_MOVIES} element={
          // <ProtectedRoute component={SavedMovies} />
          <SavedMovies />
        } />
        <Route path={endpoints.PROFILE} element={
          // <ProtectedRoute component={Profile} />
          <Profile />
        } />
        <Route path={endpoints.LOGIN} element={
          <Login onSubmitForm={onSubmitLogin} />
        } />
        <Route path={endpoints.REGISTER} element={
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
