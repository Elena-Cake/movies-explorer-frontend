
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import NotFound from './NotFound/NotFound';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import NavigationPopup from './NavigationPopup/NavigationPopup';
import { useState } from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="page">
      <Header toggleMenu={toggleMenu} />
      <Routes>
        <Route path='/' element={
          <Main />
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

      <NavigationPopup isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

    </div>
  );
}

export default App;
