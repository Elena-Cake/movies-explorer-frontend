
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import Movie from '../Movie/Movie';

function MoviesPage({ movies, isButtonVisible }) {

  const movieElements = [];
  for (let i = 0; i < 12; i++) {
    movieElements.push(movies.map((movie) => <Movie data={movie} />))
  }

  return (
    <div className="movies">
      <SearchForm />
      <ul className='movies__container'>
        {movieElements}
      </ul>
      <div className='movies__more'>
        {isButtonVisible &&
          <button className='movies__more-button button'>Ещё</button>
        }
      </div>
    </div>
  );
}

export default MoviesPage;
