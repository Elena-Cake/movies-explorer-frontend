
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import Movie from '../Movie/Movie';

function MoviesPage({ movies, isSavedPage = false }) {

  const movieElements = [];
  for (let i = 0; i < 12; i++) {
    movieElements.push(movies.map((movie) => <Movie data={movie} isSavedPage={isSavedPage} />))
  }

  return (
    <section className="movies">
      <SearchForm />
      <ul className='movies__container'>
        {movieElements}
      </ul>
      <div className='movies__more'>
        {!isSavedPage &&
          <button className='movies__more-button button'>Ещё</button>
        }
      </div>
    </section>
  );
}

export default MoviesPage;
