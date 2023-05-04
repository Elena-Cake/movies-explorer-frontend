
import './Movie.css';
import { getHours, getMinuts } from '../../constans/movie';
import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

function Movie({ dataMovie, isSavedPage, handleLike, handleDelete, onChangeSave }) {

  const { savedMovies } = useContext(MoviesContext);
  const [idMovieChangeSave, setIdMovieChangeSave] = useState(0)

  const castDuration = (duration) => {
    const hours = getHours(duration);
    const min = getMinuts(duration);
    return `${hours > 0 ? `${hours}ч ` : ''}${min === 0 ? '' : min + 'м'}`;
  }

  const onClickLike = () => {
    if (!dataMovie.isSaved) {
      handleLike(dataMovie, (isSuccess) => {
        if (isSuccess) {
          setIdMovieChangeSave(dataMovie.movieId)
        }
      })
    }
    else {
      let idSavedMovie
      savedMovies.forEach((movie) => {
        if (dataMovie.movieId === movie.movieId) {
          idSavedMovie = movie.coumovieId
        }
      })
      handleDelete(idSavedMovie, (isSuccess) => {
        if (isSuccess) {
          setIdMovieChangeSave(dataMovie.movieId)
        }
      })
    }
  }

  useEffect(() => {
    if (idMovieChangeSave !== 0) {
      onChangeSave(idMovieChangeSave)
      setIdMovieChangeSave(0)
    }
  }, [idMovieChangeSave])

  const onDeleteMovie = () => {
    handleDelete(dataMovie.coumovieId, (isSuccess) => {
      if (isSuccess) {
        setIdMovieChangeSave(dataMovie.movieId)
      }
    })
  }

  const handleCardClick = () => {
    window.open(dataMovie.trailerLink, '_blank')
  }

  return (
    <li className="movie" >
      <div className='movie__info'>
        <h3 className='movie__name'>{dataMovie.nameRU}</h3>
        <p className='movie__duration'>{castDuration(dataMovie.duration)}</p>
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
