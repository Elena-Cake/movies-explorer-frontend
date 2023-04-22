
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';

function Movies({ movies, handleLike, handleDelete }) {
  return (
    <div>
      <MoviesPage movies={movies} isButtonVisible={true}
        handleLike={handleLike} handleDelete={handleDelete} />
    </div>
  );
}

export default Movies;
