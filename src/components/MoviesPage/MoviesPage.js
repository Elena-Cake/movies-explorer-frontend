
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function MoviesPage({ movies, isSavedPage = false, handleLike, handleDelete }) {

  const [windowWidth, setWindowWidth] = useState(undefined);
  const [moviesVisible, setMoviesVisible] = useState(movies);
  const [countMoviesVisible, setCountMoviesVisible] = useState(0);
  const [stepMoviesMore, setStepMoviesMore] = useState(1);
  const [isTimeAddMovies, setIsTimeAddMovies] = useState(false);

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

  const updateMovieList = () => {
    // console.log(windowWidth)
    if (!isSavedPage) {
      if (windowWidth >= 1280) {
        setMoviesVisible(movies.slice(0, 12))
        setStepMoviesMore(3)
      }
      else if (windowWidth >= 768) {
        setMoviesVisible(movies.slice(0, 8))
        setStepMoviesMore(2)
      }
      else {
        setMoviesVisible(movies.slice(0, 5))
        setStepMoviesMore(2)
      }
    } else {
      setMoviesVisible(movies)
    }
  }

  // первое отображение фильмов
  useEffect(() => {
    updateMovieList()
  }, [movies])

  useEffect(() => {
    updateMovieList()
  }, [])

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={moviesVisible} isSavedPage={isSavedPage}
        handleLike={handleLike} handleDelete={handleDelete} />
      <div className='movies__more'>
        {!isSavedPage && countMoviesVisible <= movies.length &&
          <button className='movies__more-button button' onClick={onAddMovies}>Ещё</button>
        }
      </div>
    </section>
  );
}

export default MoviesPage;
