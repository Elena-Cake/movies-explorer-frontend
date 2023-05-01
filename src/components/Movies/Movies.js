
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import { DEFAULT_VISIBLE_MOVIES } from '../../constans/movie';

function Movies({ handleLike, handleDelete }) {

  const { allMovies, pullAllMovies } = useContext(MoviesContext);

  // const [allowedMovies, setAllowedMovies] = useState([]);
  const [allowedMovies, setAllowedMovies] = useState([]);
  const [moviesVisible, setMoviesVisible] = useState([]);
  const [defCountMoviesVisible, setDefCountMoviesVisible] = useState(8);
  const [countMoviesVisible, setCountMoviesVisible] = useState(0);


  const [isSerched, setIsSerched] = useState(false);
  const [rowFilter, setRowFilter] = useState('')
  const [isShortMovies, setIsShortMovies] = useState(false);

  const [stepMoviesMore, setStepMoviesMore] = useState(0);
  const [isTimeAddMovies, setIsTimeAddMovies] = useState(false);

  const [windowWidth, setWindowWidth] = useState(undefined);

  // ________WindowWidth___________
  // проверить ширину и назначить шаг и дефолтное количество фильмов
  const checkWindowWidth = () => {
    setMoviesVisible(allowedMovies.slice(DEFAULT_VISIBLE_MOVIES.LARGE_SIZE.COUNT_MOVIES_VISIBLE))
    setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LARGE_SIZE.STEP_MOVIES_MORE)
    if (windowWidth < 1279) {
      setMoviesVisible(allowedMovies.slice(DEFAULT_VISIBLE_MOVIES.LOWER_1279PX.COUNT_MOVIES_VISIBLE))
      setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LOWER_1279PX.STEP_MOVIES_MORE)
    }
    else if (windowWidth < 768) {
      setMoviesVisible(allowedMovies.slice(DEFAULT_VISIBLE_MOVIES.LOWER_768PX.COUNT_MOVIES_VISIBLE))
      setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LOWER_768PX.STEP_MOVIES_MORE)
    }
  }
  // прослушка изменения ширины экрана
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  // ________First View
  // если был поиск фильмов, вернуть данные
  useEffect(() => {
    checkWindowWidth()
    if (localStorage.getItem('visible-movies')) {
      checkLocalFilters()
      const movies = JSON.parse(localStorage.getItem('visible-movies')).movies;
      const count = JSON.parse(localStorage.getItem('visible-movies')).count;
      setAllowedMovies(movies)
      setCountMoviesVisible(count)
    }
  }, [])

  // назначить фильтры, если они есть
  const checkLocalFilters = () => {
    if (localStorage.getItem('filters-movie')) {
      setRowFilter(JSON.parse(localStorage.getItem('filters-movie')).row)
      setIsShortMovies(JSON.parse(localStorage.getItem('filters-movie')).short)
    }
  }

  useEffect(() => {
    checkLocalFilters()
  }, [])

  // ________Filters
  // при изменении фильтров
  const onChangeFilter = () => {
    checkWindowWidth()
    checkLocalFilters()
    setIsSerched(true)
  }

  // при первой фильтрации запрос
  useEffect(() => {
    if (allMovies.length === 0 && isSerched) { pullAllMovies() }
  }, [isSerched])

  // фильтрация
  useEffect(() => {
    if (allMovies.length !== 0) {
      let filteredMovies = allMovies
      if (isShortMovies) {
        filteredMovies = filteredMovies.filter((movie) => (movie.duration <= 40))
      }
      if (rowFilter !== '') {
        filteredMovies = filteredMovies.filter((movie) => (movie.nameRU.toLowerCase().includes(rowFilter.toLowerCase())))
      }
      setAllowedMovies(filteredMovies)
    }
  }, [isShortMovies, rowFilter, allMovies])


  // первое отображение фильмов
  useEffect(() => {
    if (localStorage.getItem('visible-movies')) {
      setMoviesVisible(allowedMovies.slice(0, countMoviesVisible))
    } else {
      checkWindowWidth()
    }
  }, [allowedMovies])

  // переназначение количества видимых фильмов
  useEffect(() => {
    if (moviesVisible.length !== 0) {
      setCountMoviesVisible(moviesVisible.length)
      localStorage.setItem('visible-movies', JSON.stringify({ movies: allowedMovies, count: moviesVisible.length }))
    }
  }, [moviesVisible]);

  // _______Add button
  // добавить фильмы на экран
  const onAddMovies = () => {
    setIsTimeAddMovies(true)
  }
  useEffect(() => {
    if (isTimeAddMovies) {
      setMoviesVisible(allowedMovies.slice(0, countMoviesVisible + stepMoviesMore))
      setIsTimeAddMovies(false)
    }
  }, [isTimeAddMovies]);


  return (
    <section className="movies">
      <MoviesPage movies={allowedMovies} moviesVisible={moviesVisible} isButtonVisible={true}
        rowValue={rowFilter} isShortMovies={isShortMovies}
        handleLike={handleLike} handleDelete={handleDelete} onChangeFilter={onChangeFilter} isSerched={isSerched} onAddMovies={onAddMovies} />
    </section>
  );
}

export default Movies;
