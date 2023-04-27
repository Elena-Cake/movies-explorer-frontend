
import Movie from '../Movie/Movie';
import './MoviesCardList.css';

function MoviesCardList({ movies, isSavedPage }) {

  const movieElements = [];
  for (let i = 0; i < 12; i++) {
    movieElements.push(movies.map((movie) => <Movie data={movie} isSavedPage={isSavedPage} />))
  }

  return (
    <ul className='movies-list'>
      {movieElements}
    </ul>
  );
}

export default MoviesCardList;
