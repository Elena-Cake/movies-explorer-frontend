
import Movie from '../Movie/Movie';
import './MoviesCardList.css';

function MoviesCardList({ movies, isSavedPage }) {

  const movieElements = [];
  movieElements.push(movies.map((movie) => <Movie id={movie.id} data={movie} isSavedPage={isSavedPage} />))

  return (
    <ul className='movies-list'>
      {movieElements}
    </ul>
  );
}

export default MoviesCardList;
