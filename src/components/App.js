
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
