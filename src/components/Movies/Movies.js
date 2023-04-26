
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

function Movies({ handleLike, handleDelete }) {

  const { allMovies, allMoviesFilters, isTimeSetFiltersMovies } = useContext(MoviesContext);
  const [rowValue, setRowValue] = useState(allMoviesFilters.row)
  const [isShortMovies, setIsShortMovies] = useState(allMoviesFilters.short)

  useEffect(() => {
    if (isTimeSetFiltersMovies) {
      console.log('filters', allMoviesFilters)
      setRowValue(allMoviesFilters.row)
      setIsShortMovies(allMoviesFilters.short)
    }
  }, [isTimeSetFiltersMovies])

  return (
    <div>
      <MoviesPage movies={allMovies} isButtonVisible={true}
        rowValue={rowValue} isShortMovies={isShortMovies}
        handleLike={handleLike} handleDelete={handleDelete} />
    </div>
  );
}

export default Movies;
