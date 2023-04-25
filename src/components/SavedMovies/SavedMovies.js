
import { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies({ movies, handleLike, handleDelete }) {

  const { savedMovies } = useContext(MoviesContext);

  return (
    <MoviesPage movies={movies} isButtonVisible={false} isSavedPage={true}
      handleLike={handleLike} handleDelete={handleDelete} />
  );
}

export default SavedMovies;
