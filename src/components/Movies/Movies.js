
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { movies } from '../../constans/testConstans';

function Movies() {

  return (
    <div>
      <MoviesPage movies={movies} isButtonVisible={true} />
    </div>
  );
}

export default Movies;
