
import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {

  const [isShortFilmsActive, setIsShortFilmsActive] = useState(false);
  const toggleShortFilm = () => {
    setIsShortFilmsActive(!isShortFilmsActive)
  }

  return (
    <div className="search">
      <div className='search__row'>
        <input className='search__input' placeholder='Фильм' />
        <button className='search__button button'>Поиск</button>
      </div>
      <div className='search__filters'>
        <button className={`filter__icon ${isShortFilmsActive ? 'filter__icon_active' : ''}`} onClick={toggleShortFilm}></button>
        <p className='filter__text'>Короткометражки</p>
      </div>
      <div className='search__bottom'></div>
    </div>
  );
}

export default SearchForm;
