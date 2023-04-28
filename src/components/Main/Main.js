
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

function Main({
  isMenuOpen, closeMenu,
  onSubmitLogin, onSubmitRegister, logOut,
  isEditMode, handleEditMode,
  textErrorAuth, deleteErrorSubmit,
  handleLike, handleDelete, ...props
}) {
  console.log(props.isSignIn)

  return (
    <main className='main'>
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
          <ProtectedRoute component={Movies} isSignIn={props.isSignIn}
            handleLike={handleLike} handleDelete={handleDelete} />
        } />
        <Route path={endpoints.SAVED_MOVIES} element={
          <ProtectedRoute component={SavedMovies} isSignIn={props.isSignIn}
            handleLike={handleLike} handleDelete={handleDelete} />
        } />
        <Route path={endpoints.PROFILE} element={
          <ProtectedRoute component={Profile} isSignIn={props.isSignIn}
            logOut={logOut} textErrorAuth={textErrorAuth}
            isEditMode={isEditMode} handleEditMode={handleEditMode} />
        } />
        <Route path={endpoints.LOGIN} element={
          <Login onSubmitForm={onSubmitLogin} textErrorAuth={textErrorAuth} deleteErrorSubmit={deleteErrorSubmit} />
        } />
        <Route path={endpoints.REGISTER} element={
          <Register onSubmitForm={onSubmitRegister} textErrorAuth={textErrorAuth} deleteErrorSubmit={deleteErrorSubmit} />
        } />
        <Route path='*' element={
          <NotFound />
        } />
      </Routes>

      <NavigationPopup isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </main>
  );
}

export default Main;
