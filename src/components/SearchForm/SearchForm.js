
import { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ onChangeFilter, onSearchMovie }) {

  const [isShortFilmsActive, setIsShortFilmsActive] = useState(false);
  const [isShortFilmsChanged, setIsShortFilmsChanged] = useState(false);
  const toggleShortFilm = () => {
    setIsShortFilmsActive(!isShortFilmsActive)
    setIsShortFilmsChanged(true)
  }

  const onSubmitForm = (e) => {
    e.preventDafault()
    // onSearchMovie(formData)
  }

  useEffect(() => {
    if (isShortFilmsChanged) {
      onChangeFilter("shortFilms", isShortFilmsActive)
      setIsShortFilmsChanged(false)
    }
  }, [isShortFilmsChanged])


  return (
    <div className="search">
      <form className='search__row' onSubmit={onSubmitForm}>
        <input className='search__input' placeholder='Фильм' required name='searchRow' />
        <button className='search__button button'>Поиск</button>
      </form>
      <ul className='search__filters'>
        <li className='search__filter' key={0} name={'shortFilms'} onClick={toggleShortFilm}>
          <button className={`filter__icon ${isShortFilmsActive ? 'filter__icon_active' : ''}`} ></button>
          <p className='filter__text'>Короткометражки</p>
        </li>
      </ul>
      <div className='search__bottom'></div>
    </div>
  );
}

export default SearchForm;
