
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

  return (
    <section className="movies">
      <MoviesPage movies={allowedMovies} isButtonVisible={true}
        rowValue={rowFilter} isShortMovies={isShortMovies}
        handleLike={handleLike} handleDelete={handleDelete} onChangeFilter={onChangeFilter} isSerched={isSerched} />
    </section>
  );
}

export default Movies;
