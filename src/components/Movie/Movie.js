
import { useEffect, useState } from 'react';
import './Movie.css';

function Movie({ data, isSavedPage }) {

  const hours = Math.floor(data.duration / 60);
  const min = data.duration % 60;
  const duration = `${hours > 0 ? `${hours}ч ` : ''}${min === 0 ? '' : min + 'м'}`;

  const src = 'https://api.nomoreparties.co/' + data.image.url

  const [isFlagActive, setIsFlagActive] = useState(false)
  const toggleFlag = () => {

    setIsFlagActive(!isFlagActive)
  }

  const onDeleteMovie = () => {
    console.log('delete')
  }

  const handleCardClick = () => {
    window.open(data.trailerLink, '_blank')
  }

  // useEffect(() => {
  //   if (isFlagActive) {
  //     console.log('delete')
  //   } else {
  //     console.log('add')

  //   }
  // }, [isFlagActive])

  return (
    <li className="movie">
      <div className='movie__info'>
        <h3 className='movie__name'>{data.nameRU}</h3>
        <p className='movie__duration'>{duration}</p>
        {!isSavedPage ?
          <button className={`movie__flag-button button ${isFlagActive && 'movie__flag-button_active'}`} onClick={toggleFlag}></button>
          :
          <button className='movie__delete-button button' onClick={onDeleteMovie}></button>
        }
      </div>
      <div className='movie__foto-container' onClick={handleCardClick}>
        <img className='movie__foto' src={src} alt='скриншот фильма' />
      </div>
    </li>
  );
}

export default Movie;
