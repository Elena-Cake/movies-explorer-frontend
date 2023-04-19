
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import Footer from '../Footer/Footer';
import { movies } from '../../constans/testConstans';

function Movies() {

  return (
    <div>
      <MoviesPage movies={movies} isButtonVisible={true} />
      <Footer />
    </div>
  );
}

export default Movies;
