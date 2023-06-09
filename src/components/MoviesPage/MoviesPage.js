
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import Movie from '../Movie/Movie';

function MoviesPage({ movies, moviesVisible, isSavedPage = false, handleLike, handleDelete,
  rowValue, isShortMovies, onChangeFilter, isSerched = true, onAddMovies = () => { }, onChangeSave }) {

  const movieElements = [];
  movieElements.push(moviesVisible.map((movie, i) => {
    return < Movie key={i} dataMovie={movie} isSavedPage={isSavedPage}
      handleLike={handleLike} handleDelete={handleDelete} onChangeSave={onChangeSave} />
  }))

  return (
    <div className='movies-page'>
      <SearchForm onChangeFilter={onChangeFilter} rowValue={rowValue} isShortMovies={isShortMovies} isSavedPage={isSavedPage} />
      {movies.length === 0 ?
        isSerched ?
          <p className='movies__error'>Ничего не найдено</p>
          :
          <div className='movies__more'>
            <button className='movies__more-button button' onClick={onChangeFilter}>Все фильмы</button>
          </div>
        :
        <ul className='movies-list'>
          {movieElements}
        </ul>
      }
      <div className='movies__more'>
        {!isSavedPage && moviesVisible.length < movies.length - 1 &&
          <button className='movies__more-button button' onClick={onAddMovies}>Ещё</button>
        }
      </div>
    </div>
  );
}

export default MoviesPage;
