
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function MoviesPage({ movies, isSavedPage = false }) {

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} isSavedPage={isSavedPage} />
      <div className='movies__more'>
        {!isSavedPage &&
          <button className='movies__more-button button'>Ещё</button>
        }
      </div>
    </section>
  );
}

export default MoviesPage;
