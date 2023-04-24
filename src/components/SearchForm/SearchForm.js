
import { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ onChangeFilter }) {

  const [isShortFilmsActive, setIsShortFilmsActive] = useState(false);
  const [isShortFilmsChanged, setIsShortFilmsChanged] = useState(false);
  const toggleShortFilm = () => {
    setIsShortFilmsActive(!isShortFilmsActive)
    setIsShortFilmsChanged(true)
  }

  useEffect(() => {
    if (isShortFilmsChanged) {
      onChangeFilter("shortFilms", isShortFilmsActive)
      setIsShortFilmsChanged(false)
    }
  }, [isShortFilmsChanged])


  return (
    <div className="search">
      <form className='search__row'>
        <input className='search__input' placeholder='Фильм' required />
        <button className='search__button button'>Поиск</button>
      </form>
      <ul className='search__filters'>
        <li className='search__filter' key={0}>
          <button className={`filter__icon ${isShortFilmsActive ? 'filter__icon_active' : ''}`} onClick={toggleShortFilm}></button>
          <p className='filter__text'>Короткометражки</p>
        </li>
      </ul>
      <div className='search__bottom'></div>
    </div>
  );
}

export default SearchForm;
