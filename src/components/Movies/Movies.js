
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { useState, useContext, useEffect } from 'react';
import { AllMoviesContext } from '../../contexts/MoviesContext';

function Movies({ handleLike, handleDelete }) {

  const movies = useContext(AllMoviesContext);
  useEffect(() => {
    console.log(movies)
  }, [movies])

  return (
    <div>
      <MoviesPage movies={movies} isButtonVisible={true}
        handleLike={handleLike} handleDelete={handleDelete} />
    </div>
  );
}

export default Movies;
