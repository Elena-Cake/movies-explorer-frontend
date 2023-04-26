
import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies({ movies, handleLike, handleDelete }) {

  const { savedMovies, savedMoviesFilters, isTimeSetFiltersSavedMovies } = useContext(MoviesContext);
  const [rowValue, setRowValue] = useState(savedMoviesFilters.row)
  const [isShortMovies, setIsShortMovies] = useState(savedMoviesFilters.short)

  useEffect(() => {
    if (isTimeSetFiltersSavedMovies) {
      console.log('filters', savedMoviesFilters)
      setRowValue(savedMoviesFilters.row)
      setIsShortMovies(savedMoviesFilters.short)
    }
  }, [isTimeSetFiltersSavedMovies])

  return (
    <MoviesPage movies={savedMovies} isButtonVisible={false} isSavedPage={true}
      rowValue={rowValue} isShortMovies={isShortMovies}
      handleLike={handleLike} handleDelete={handleDelete} />
  );
}

export default SavedMovies;
