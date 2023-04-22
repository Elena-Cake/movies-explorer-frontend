
import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './MoviesCardList.css';

function MoviesCardList({ movies, isSavedPage, handleLike, handleDelete }) {

  const movieElements = [];
  movieElements.push(movies.map((movie) => {
    // (savedMoviesIds.include(movie.id)) ? setIsSaved(true) : setIsSaved(false)
    return < Movie key={movie.id} dataMovie={movie} isSavedPage={isSavedPage} handleLike={handleLike} handleDelete={handleDelete} />
  }))

  return (
    <ul className='movies-list'>
      {movieElements}
    </ul>
  );
}

export default MoviesCardList;
