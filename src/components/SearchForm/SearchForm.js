
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search">
      <div className='search__row'>
        <input className='search__input' placeholder='Фильм' />
        <button className='search__button button'>Поиск</button>
      </div>
      <div className='search__filters'>
        <div className='filter__icon filter__icon_active'></div>
        <p className='filter__text'>Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
