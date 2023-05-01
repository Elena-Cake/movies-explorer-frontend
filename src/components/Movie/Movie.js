
import './Movie.css';
import { GET_HOURS, GET_MINUTS } from '../../constans/movie';
import { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

function Movie({ dataMovie, isSavedPage, handleLike, handleDelete }) {

  const { savedMovies } = useContext(MoviesContext);

  const castDuration = (duration) => {
    const hours = GET_HOURS(duration);
    const min = GET_MINUTS(duration);
    return `${hours > 0 ? `${hours}ч ` : ''}${min === 0 ? '' : min + 'м'}`;
  }

  const onClickLike = () => {
    if (!dataMovie.isSaved) {
      // handleLike(dataMovie)
      handleLike(dataMovie, (isSuccess) => {
        if (isSuccess) {
          dataMovie.isSaved = true
        }
      })
    } else {
      let idSavedMovie
      savedMovies.forEach((movie) => {
        if (dataMovie.movieId === movie.movieId) {
          idSavedMovie = movie.coumovieId
        }
      })
      handleDelete(idSavedMovie, (isSuccess) => {
        if (isSuccess) {
          dataMovie.isSaved = false
        }
      })
    }
  }

  const onDeleteMovie = () => {
    handleDelete(dataMovie.coumovieId, (isSuccess) => { })
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
