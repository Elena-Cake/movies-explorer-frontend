
import './Movie.css';
import { GET_HOURS, GET_MINUTS } from '../../constans/movie';

function Movie({ dataMovie, isSavedPage, handleLike, handleDelete }) {

  const castDuration = (duration) => {
    const hours = GET_HOURS(duration);
    const min = GET_MINUTS(duration);
    return `${hours > 0 ? `${hours}ч ` : ''}${min === 0 ? '' : min + 'м'}`;
  }

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
