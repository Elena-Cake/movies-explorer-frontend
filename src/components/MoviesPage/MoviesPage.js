
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function MoviesPage({ movies, isSavedPage = false }) {

  const [windowWidth, setWindowWidth] = useState(undefined);
  const [moviesVisible, setMoviesVisible] = useState([]);
  const [countMoviesVisible, setCountMoviesVisible] = useState(0);
  const [stepMoviesMore, setStepMoviesMore] = useState(1);
  const [isTimeAddMovies, setIsTimeAddMovies] = useState(false);

  // добавить фильмы на экран
  const onAddMovies = () => {
    setIsTimeAddMovies(!isTimeAddMovies)
  }

  useEffect(() => {
    setMoviesVisible(movies.slice(0, countMoviesVisible + stepMoviesMore))
  }, [isTimeAddMovies]);

  useEffect(() => {
    setCountMoviesVisible(moviesVisible.length)
  }, [moviesVisible]);

  // прослушка изменения ширины экрана
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (moviesVisible.length === 0) {
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
    }
  }, [windowWidth])

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={moviesVisible} isSavedPage={isSavedPage} />
      <div className='movies__more'>
        {!isSavedPage && countMoviesVisible < movies.length &&
          <button className='movies__more-button button' onClick={onAddMovies}>Ещё</button>
        }
      </div>
    </section>
  );
}

export default MoviesPage;
