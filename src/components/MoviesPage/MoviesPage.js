
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import { DEFAULT_VISIBLE_MOVIES } from '../../constans/movie';

function MoviesPage({ movies, isSavedPage = false, handleLike, handleDelete,
  rowValue, isShortMovies, onChangeFilter, isSerched = true }) {

  const [windowWidth, setWindowWidth] = useState(undefined);

  const [moviesVisible, setMoviesVisible] = useState([]);
  const [countMoviesVisible, setCountMoviesVisible] = useState(0);
  const [stepMoviesMore, setStepMoviesMore] = useState(0);
  const [isTimeAddMovies, setIsTimeAddMovies] = useState(false);

  const movieElements = [];
  movieElements.push(moviesVisible.map((movie, i) => {
    return < Movie key={i} dataMovie={movie} isSavedPage={isSavedPage} handleLike={handleLike} handleDelete={handleDelete} />
  }))

  // добавить фильмы на экран
  const onAddMovies = () => {
    setIsTimeAddMovies(true)
  }
  useEffect(() => {
    if (isTimeAddMovies) {
      setMoviesVisible(movies.slice(0, countMoviesVisible + stepMoviesMore))
      setIsTimeAddMovies(false)
      if (!isSavedPage) {
        localStorage.setItem('visible-movies', JSON.stringify(moviesVisible))
      }
    }
  }, [isTimeAddMovies]);

  // переназначение количества видимых фильмов
  useEffect(() => {
    setCountMoviesVisible(moviesVisible.length)
  }, [moviesVisible]);


  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  // прослушка изменения ширины экрана
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // переворот экрана
  useEffect(() => {
    if (!isSavedPage) {
      if (windowWidth >= 1279) {
        setStepMoviesMore(3)
        // дополняю фильмы до целой полоски
        if (countMoviesVisible % 3 !== 0) {
          setMoviesVisible(movies.slice(0, (Math.floor(countMoviesVisible / 3) + 1) * 3))
        }
      }
      else if (windowWidth >= 768) {
        setStepMoviesMore(2)
        if (countMoviesVisible % 2 !== 0) {
          setMoviesVisible(movies.slice(0, (Math.floor(countMoviesVisible / 2) + 1) * 2))
        }
      }
      else {
        setStepMoviesMore(2)
      }
    }
  }, [windowWidth])

  // первое отображение фильмов
  useEffect(() => {
    if (localStorage.getItem('visible-movies') && !isSavedPage) {
      setMoviesVisible(JSON.parse(localStorage.getItem('visible-movies')))
    } else if (!isSavedPage) {
      setMoviesVisible(movies.slice(0, DEFAULT_VISIBLE_MOVIES.LARGE_SIZE.COUNT_MOVIES_VISIBLE))
      setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LARGE_SIZE.STEP_MOVIES_MORE)
      if (windowWidth < 1279) {
        setMoviesVisible(movies.slice(0, DEFAULT_VISIBLE_MOVIES.LOWER_1279PX.COUNT_MOVIES_VISIBLE))
        setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LOWER_1279PX.STEP_MOVIES_MORE)
      }
      else if (windowWidth < 768) {
        setMoviesVisible(movies.slice(0, DEFAULT_VISIBLE_MOVIES.LOWER_768PX.COUNT_MOVIES_VISIBLE))
        setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LOWER_768PX.STEP_MOVIES_MORE)
      }
    } else {
      setMoviesVisible(movies)
    }
  }, [movies])

  return (
    <div className='movies-page'>
      <SearchForm onChangeFilter={onChangeFilter} rowValue={rowValue} isShortMovies={isShortMovies} isSavedPage={isSavedPage} />
      {moviesVisible.length === 0 && isSerched ?
        <p className='movies__error'>Ничего не найдено</p>
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
