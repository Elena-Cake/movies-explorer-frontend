
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

function MoviesPage({ movies, isSavedPage = false, handleLike, handleDelete,
  rowValue, isShortMovies, onChangeFilter }) {


  const [windowWidth, setWindowWidth] = useState(undefined);

  const [moviesVisible, setMoviesVisible] = useState([]);
  const [countMoviesVisible, setCountMoviesVisible] = useState(0);
  const [stepMoviesMore, setStepMoviesMore] = useState(0);
  const [isTimeAddMovies, setIsTimeAddMovies] = useState(false);
  const [isTimeUpdateMovies, setIsTimeUpdateMovies] = useState(false);

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
    }
  }, [isTimeAddMovies]);

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
    if (!isSavedPage) {
      setMoviesVisible(movies.slice(0, 12))
      setStepMoviesMore(3)
      if (windowWidth < 1279) {
        setMoviesVisible(movies.slice(0, 8))
        setStepMoviesMore(2)
      }
      else if (windowWidth < 768) {
        setMoviesVisible(movies.slice(0, 5))
        setStepMoviesMore(2)
      }
    } else {
      setMoviesVisible(movies)
    }
  }, [movies])

  return (
    <section className="movies">
      <SearchForm onChangeFilter={onChangeFilter} rowValue={rowValue} isShortMovies={isShortMovies} isSavedPage={isSavedPage} />
      {moviesVisible.length === 0 ?
        <p>Ничего не найдено</p>
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
    </section>
  );
}

export default MoviesPage;
