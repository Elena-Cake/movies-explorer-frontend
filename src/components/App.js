
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <Header />
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
          <Profile />
        } />
        <Route path='/signup' element={
          <Profile />
        } />
        <Route path='*' element={
          <NotFound />
        } />
      </Routes>
    </div>
  );
}

export default App;
