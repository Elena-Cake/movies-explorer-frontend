
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies({ movies, handleLike, handleDelete }) {


  return (
    <MoviesPage movies={movies} isButtonVisible={false} isSavedPage={true}
      handleLike={handleLike} handleDelete={handleDelete} />
  );
}

export default SavedMovies;
