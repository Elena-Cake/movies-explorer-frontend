
import { useState } from 'react';
import './Movie.css';

function Movie({ data, isSavedPage }) {

  const duration = `${Math.floor(data.duration / 60) > 0 ? `${Math.floor(data.duration / 60)}ч ` : ''}${data.duration % 60}м`

  const [isFlagActive, setIsFlagActive] = useState(false)
  const toggleFlag = () => {
    setIsFlagActive(!isFlagActive)
  }

  const onDeleteMovie = () => {
    console.log('delete')
  }

  return (
    <li className="movie">
      <div className='movie__info'>
        <h3 className='movie__name'>{data.nameRU}</h3>
        <p className='movie__duration'>{duration}</p>
        {!isSavedPage ?
          <button className={`movie__flag button ${isFlagActive && 'movie__flag_active'}`} onClick={toggleFlag}></button>
          :
          <button className='movie__delete-button button' onClick={onDeleteMovie}>&#x2715;</button>
        }
      </div>
      <div className='movie__foto-container'>
        <img className='movie__foto' src={data.image.previewUrl} alt='скриншот фильма' />
      </div>
    </li>
  );
}

export default Movie;
