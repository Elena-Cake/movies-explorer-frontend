
import { useEffect, useState } from 'react';
import './Movie.css';

function Movie({ dataMovie, isSavedPage, handleLike, handleDelete }) {

  const hours = Math.floor(dataMovie.duration / 60);
  const min = dataMovie.duration % 60;
  const duration = `${hours > 0 ? `${hours}ч ` : ''}${min === 0 ? '' : min + 'м'}`;


  const onClickLike = () => {
    handleLike(dataMovie)
  }

  const onDeleteMovie = () => {
    handleDelete(dataMovie.coumovieId)
  }

  const handleCardClick = () => {
    window.open(dataMovie.trailerLink, '_blank')
  }

  return (
    <li className="movie" >
      <div className='movie__info'>
        <h3 className='movie__name'>{dataMovie.nameRU}</h3>
        <p className='movie__duration'>{duration}</p>
        {!isSavedPage ?
          <button className={`movie__flag-button button ${dataMovie.isSaved && 'movie__flag-button_active'}`} onClick={onClickLike}></button>
          :
          <button className='movie__delete-button button' onClick={onDeleteMovie}></button>
        }
      </div>
      <div className='movie__foto-container' onClick={handleCardClick}>
        <img className='movie__foto' src={dataMovie.image} alt='скриншот фильма' />
      </div>
    </li>
  );
}

export default Movie;
