
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function MoviesPage({ movies, isSavedPage = false }) {

  const [windowWidth, setWindowWidth] = useState(undefined);
  const [moviesVisible, setMoviesVisible] = useState([])

  console.log(moviesVisible)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(windowWidth)
    if (moviesVisible.length === 0) {
      if (windowWidth >= 1280) {
        setMoviesVisible(movies.slice(0, 12))
      }
      else if (windowWidth >= 768) {
        setMoviesVisible(movies.slice(0, 8))
      }
      else {
        setMoviesVisible(movies.slice(0, 5))
      }
    }
  }, [windowWidth])

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={moviesVisible} isSavedPage={isSavedPage} />
      <div className='movies__more'>
        {!isSavedPage &&
          <button className='movies__more-button button'>Ещё</button>
        }
      </div>
    </section>
  );
}

export default MoviesPage;
