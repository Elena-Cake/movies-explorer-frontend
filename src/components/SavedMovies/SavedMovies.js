
import { saveMovies } from '../../constans/testConstans';
import Footer from '../Footer/Footer';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies() {

  return (
    <div>
      <MoviesPage movies={saveMovies} isButtonVisible={false} isSavedPage={true} />
      <Footer />
    </div>
  );
}

export default SavedMovies;
