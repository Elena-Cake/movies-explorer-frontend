
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { movies } from '../../constans/testConstans';

function Movies() {

  return (
    <MoviesPage movies={movies} isButtonVisible={true} />
  );
}

export default Movies;
