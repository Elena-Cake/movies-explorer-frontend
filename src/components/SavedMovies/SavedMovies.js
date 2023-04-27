
import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies({ movies, handleLike, handleDelete }) {

  const { savedMovies } = useContext(MoviesContext);
  // const [rowValue, setRowValue] = useState(savedMoviesFilters.row)
  // const [isShortMovies, setIsShortMovies] = useState(savedMoviesFilters.short)



  return (
    <MoviesPage movies={savedMovies} isButtonVisible={false} isSavedPage={true}
      rowValue={''} isShortMovies={false}
      handleLike={handleLike} handleDelete={handleDelete} />
  );
}

export default SavedMovies;
