
import { useState } from 'react';
import './Movie.css';

const data = {
  country: "США",
  created_at: "2020-11-23T14:12:21.376Z",
  description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена.",
  director: "Стивен Кайак ",
  duration: 61,
  id: 1,
  image: {
    previewUrl: "https://cdn5.vedomosti.ru/image/2019/7u/1eejw4/original-1tbo.jpg"
  },
  nameEN: "Stones in Exile",
  nameRU: "33 слова о дизайне",
  trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
  updated_at: "2020-11-23T14:12:21.376Z",
  year: "2010"
}

function Movie({ data }) {


  const duration = `${Math.floor(data.duration / 60) > 0 ? `${Math.floor(data.duration / 60)}ч ` : ''}${data.duration % 60}м`

  const [isFlagActive, setIsFlagActive] = useState(false)
  const toggleFlag = () => {
    setIsFlagActive(!isFlagActive)
  }

  return (
    <div className="movie">
      <div className='movie__info'>
        <h3 className='movie__name'>{data.nameRU}</h3>
        <p className='movie__duration'>{duration}</p>
        <button className={`movie__flag button ${isFlagActive && 'movie__flag_active'}`} onClick={toggleFlag}></button>
      </div>
      <div className='movie__foto-container'>
        <img className='movie__foto' src={data.image.previewUrl} alt='скриншот фильма' />
      </div>
    </div>
  );
}

export default Movie;
