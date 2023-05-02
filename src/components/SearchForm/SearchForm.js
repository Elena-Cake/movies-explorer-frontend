
import { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ onChangeFilter, isSavedPage }) {

  const nameLocalStorigeFilters = isSavedPage ? 'filters-movie-saved' : 'filters-movie'
  const [valueSearchRow, setValueSearchRow] = useState('')
  const [isShortFilmsActive, setIsShortFilmsActive] = useState(false)
  const [isShortFilmsChanged, setIsShortFilmsChanged] = useState(false);
  const [isTimeSubmit, setIsTimeSubmit] = useState(false);

  const checkLocalFilters = () => {
    if (localStorage.getItem(nameLocalStorigeFilters)) {
      setValueSearchRow(JSON.parse(localStorage.getItem(nameLocalStorigeFilters)).row)
      setIsShortFilmsActive(JSON.parse(localStorage.getItem(nameLocalStorigeFilters)).short)
    }
  }

  useEffect(() => {
    checkLocalFilters()
  }, [])


  const toggleShortFilm = () => {
    setIsShortFilmsActive(!isShortFilmsActive)
    setIsShortFilmsChanged(true)
  }

  const changeInputSearch = (e) => {
    setValueSearchRow(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    setIsTimeSubmit(true)
    // localStorage.setItem(nameLocalStorigeFilters, JSON.stringify({ row: valueSearchRow, short: isShortFilmsActive }))
    onChangeFilter()
  }

  useEffect(() => {
    if (isTimeSubmit) {
      localStorage.setItem(nameLocalStorigeFilters, JSON.stringify({ row: valueSearchRow, short: isShortFilmsActive }))
      onChangeFilter(nameLocalStorigeFilters)
      setIsTimeSubmit(false)
    }
  }, [isTimeSubmit])

  useEffect(() => {
    if (isShortFilmsChanged) {
      localStorage.setItem(nameLocalStorigeFilters, JSON.stringify({ row: valueSearchRow, short: isShortFilmsActive }))
      onChangeFilter(nameLocalStorigeFilters)
      setIsShortFilmsChanged(false)
    }
  }, [isShortFilmsChanged])

  return (
    <div className="search" >
      <form className='search__row' onSubmit={onSubmitForm}>
        <input className='search__input' placeholder='Фильм' name='searchRow' value={valueSearchRow || ''} onChange={changeInputSearch} />
        <button type='submit' className='search__button button'>Поиск</button>
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
