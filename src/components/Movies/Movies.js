
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

function Movies({ handleLike, handleDelete }) {

  const { allMovies, pullAllMovies } = useContext(MoviesContext);
  const [rowFilter, setRowFilter] = useState('')
  const [isShortMovies, setIsShortMovies] = useState(false)
  const [allowedMovies, setAllowedMovies] = useState([])

  const [isSerched, setIsSerched] = useState(false);

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

  // при изменении фильтров
  const onChangeFilter = () => {
    checkLocalFilters()
    setIsSerched(true)
  }

  // первый запрос фильмов
  useEffect(() => {
    if (isSerched) { pullAllMovies() }
  }, [isSerched])

  // фильтрация
  useEffect(() => {
    if (localStorage.getItem('filters-movie')) {
      let filteredMovies = allMovies
      if (isShortMovies) {
        filteredMovies = filteredMovies.filter((movie) => (movie.duration <= 40))
      }
      if (rowFilter !== '') {
        filteredMovies = filteredMovies.filter((movie) => (movie.nameRU.toLowerCase().includes(rowFilter.toLowerCase())))
      }
      setAllowedMovies(filteredMovies)
    }
  }, [isShortMovies, rowFilter])

  useEffect(() => {

  }, [allMovies])







  // const [windowWidth, setWindowWidth] = useState(undefined);

  // const [moviesVisible, setMoviesVisible] = useState([]);
  // const [countMoviesVisible, setCountMoviesVisible] = useState(0);
  // const [stepMoviesMore, setStepMoviesMore] = useState(0);
  // const [isTimeAddMovies, setIsTimeAddMovies] = useState(false);

  // const movieElements = [];
  // movieElements.push(moviesVisible.map((movie, i) => {
  //   return < Movie key={i} dataMovie={movie} isSavedPage={isSavedPage} handleLike={handleLike} handleDelete={handleDelete} />
  // }))

  // // добавить фильмы на экран
  // const onAddMovies = () => {
  //   setIsTimeAddMovies(true)
  // }
  // useEffect(() => {
  //   if (isTimeAddMovies) {
  //     setMoviesVisible(movies.slice(0, countMoviesVisible + stepMoviesMore))
  //     setIsTimeAddMovies(false)
  //     if (!isSavedPage) {
  //       localStorage.setItem('visible-movies', JSON.stringify(moviesVisible))
  //     }
  //   }
  // }, [isTimeAddMovies]);

  // // переназначение количества видимых фильмов
  // useEffect(() => {
  //   setCountMoviesVisible(moviesVisible.length)
  // }, [moviesVisible]);


  // function handleResize() {
  //   setWindowWidth(window.innerWidth);
  // }
  // // прослушка изменения ширины экрана
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // // переворот экрана
  // useEffect(() => {
  //   if (!isSavedPage) {
  //     if (windowWidth >= 1279) {
  //       setStepMoviesMore(3)
  //       // дополняю фильмы до целой полоски
  //       if (countMoviesVisible % 3 !== 0) {
  //         setMoviesVisible(movies.slice(0, (Math.floor(countMoviesVisible / 3) + 1) * 3))
  //       }
  //     }
  //     else if (windowWidth >= 768) {
  //       setStepMoviesMore(2)
  //       if (countMoviesVisible % 2 !== 0) {
  //         setMoviesVisible(movies.slice(0, (Math.floor(countMoviesVisible / 2) + 1) * 2))
  //       }
  //     }
  //     else {
  //       setStepMoviesMore(2)
  //     }
  //   }
  // }, [windowWidth])

  // // первое отображение фильмов
  // useEffect(() => {
  //   if (localStorage.getItem('visible-movies') && !isSavedPage) {
  //     setMoviesVisible(JSON.parse(localStorage.getItem('visible-movies')))
  //   } else if (!isSavedPage) {
  //     setMoviesVisible(movies.slice(0, DEFAULT_VISIBLE_MOVIES.LARGE_SIZE.COUNT_MOVIES_VISIBLE))
  //     setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LARGE_SIZE.STEP_MOVIES_MORE)
  //     if (windowWidth < 1279) {
  //       setMoviesVisible(movies.slice(0, DEFAULT_VISIBLE_MOVIES.LOWER_1279PX.COUNT_MOVIES_VISIBLE))
  //       setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LOWER_1279PX.STEP_MOVIES_MORE)
  //     }
  //     else if (windowWidth < 768) {
  //       setMoviesVisible(movies.slice(0, DEFAULT_VISIBLE_MOVIES.LOWER_768PX.COUNT_MOVIES_VISIBLE))
  //       setStepMoviesMore(DEFAULT_VISIBLE_MOVIES.LOWER_768PX.STEP_MOVIES_MORE)
  //     }
  //   } else {
  //     setMoviesVisible(movies)
  //   }
  // }, [movies])










  return (
    <section className="movies">
      <MoviesPage movies={allowedMovies} moviesVisible={allowedMovies} isButtonVisible={true}
        rowValue={rowFilter} isShortMovies={isShortMovies}
        handleLike={handleLike} handleDelete={handleDelete} onChangeFilter={onChangeFilter} isSerched={isSerched} />
    </section>
  );
}

export default Movies;
