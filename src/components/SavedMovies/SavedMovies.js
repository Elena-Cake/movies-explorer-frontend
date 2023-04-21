
import { saveMovies } from '../../constans/movies';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies({ movies }) {

  return (
    <MoviesPage movies={movies} isButtonVisible={false} isSavedPage={true} />
  );
}

export default SavedMovies;
