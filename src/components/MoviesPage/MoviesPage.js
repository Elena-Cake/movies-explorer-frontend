
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function MoviesPage({ movies, isSavedPage = false, handleLike, handleDelete }) {

  const [windowWidth, setWindowWidth] = useState(undefined);

  const [moviesFiltered, setMoviesFiltered] = useState(movies);
  const [moviesVisible, setMoviesVisible] = useState([]);
  const [countMoviesVisible, setCountMoviesVisible] = useState(0);
  const [stepMoviesMore, setStepMoviesMore] = useState(0);
  const [isTimeAddMovies, setIsTimeAddMovies] = useState(false);
  const [isTimeUpdateMovies, setIsTimeUpdateMovies] = useState(false);


  // добавить фильмы на экран
  const onAddMovies = () => {
    setIsTimeAddMovies(true)
  }

  useEffect(() => {
    if (isTimeAddMovies) {
      setMoviesVisible(moviesFiltered.slice(0, countMoviesVisible + stepMoviesMore))
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

  // возвращение на страницу...запомнить фильмы...
  // переворот экрана
  useEffect(() => {
    if (!isSavedPage) {
      if (windowWidth >= 1279) {
        setStepMoviesMore(3)
        // дополняю фильмы до целой полоски
        if (countMoviesVisible % 3 !== 0) {
          setMoviesVisible(moviesFiltered.slice(0, (Math.floor(countMoviesVisible / 3) + 1) * 3))
        }
      }
      else if (windowWidth >= 768) {
        setStepMoviesMore(2)
        if (countMoviesVisible % 2 !== 0) {
          setMoviesVisible(moviesFiltered.slice(0, (Math.floor(countMoviesVisible / 2) + 1) * 2))
        }
      }
      else {
        setStepMoviesMore(2)
      }
    }
  }, [windowWidth])

  // первое отображение фильмов
  useEffect(() => {
    setIsTimeUpdateMovies(true)
  }, [movies])

  useEffect(() => {
    if (isTimeUpdateMovies) {
      setMovies(movies)
      setIsTimeUpdateMovies(false)
    }
  }, [isTimeUpdateMovies])

  const setMovies = (allMovies) => {
    if (!isSavedPage) {
      if (windowWidth >= 1279) {
        setMoviesVisible(allMovies.slice(0, 12))
        setStepMoviesMore(3)
      }
      else if (windowWidth >= 768) {
        setMoviesVisible(allMovies.slice(0, 8))
        setStepMoviesMore(2)
      }
      else {
        setMoviesVisible(allMovies.slice(0, 5))
        setStepMoviesMore(2)
      }
    } else {
      setMoviesVisible(allMovies)
    }
  }

  // изменение фильтра
  useEffect(() => {
    setMovies(moviesFiltered)
  }, [moviesFiltered])


  // нажатие фильтра
  const changeFilter = (nameFilter, isActive) => {
    if (nameFilter === 'shortFilms') {
      isActive ?
        setMoviesFiltered(movies.filter((movie) => movie.duration < 41))
        :
        setMoviesFiltered(movies)
    }
  }

  // 
  const onSearchMovie = (formData) => {
    console.log(formData)
  }

  return (
    <section className="movies">
      <SearchForm onChangeFilter={changeFilter} onSearchMovie={onSearchMovie} />
      <MoviesCardList movies={moviesVisible} isSavedPage={isSavedPage}
        handleLike={handleLike} handleDelete={handleDelete} />
      <div className='movies__more'>
        {/* {!isSavedPage && moviesVisible.length < moviesFiltered.length - 1 && */}
        <button className='movies__more-button button' onClick={onAddMovies}>Ещё</button>
        {/* } */}
      </div>
    </section>
  );
}

export default MoviesPage;
