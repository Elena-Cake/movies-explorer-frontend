
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

function Movies({ handleLike, handleDelete }) {

  const { allMovies } = useContext(MoviesContext);

  return (
    <div>
      <MoviesPage movies={allMovies} isButtonVisible={true}
        handleLike={handleLike} handleDelete={handleDelete} />
    </div>
  );
}

export default Movies;
