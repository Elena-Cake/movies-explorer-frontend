
import { saveMovies } from '../../constans/testConstans';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies() {

  return (
    <MoviesPage movies={saveMovies} isButtonVisible={false} isSavedPage={true} />
  );
}

export default SavedMovies;
