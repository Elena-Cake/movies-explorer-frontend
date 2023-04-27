
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';
import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';

function Movies({ handleLike, handleDelete }) {

  const { allMovies } = useContext(MoviesContext);
  const [rowFilter, setRowFilter] = useState('')
  const [isShortMovies, setIsShortMovies] = useState(false)
  const [allowedMovies, setAllowedMovies] = useState([])

  const checkLocalFilters = () => {
    if (localStorage.getItem('filters-movie')) {
      setRowFilter(JSON.parse(localStorage.getItem('filters-movie')).row)
      setIsShortMovies(JSON.parse(localStorage.getItem('filters-movie')).short)
    }
  }

  useEffect(() => {
    checkLocalFilters()
  }, [])

  const onChangeFilter = () => {
    checkLocalFilters()
  }

  // фильтрация
  useEffect(() => {
    if (localStorage.getItem('filters-movie')) {
      let filteredMovies = allMovies
      if (isShortMovies) {
        filteredMovies = filteredMovies.filter((movie) => (movie.duration <= 40))
      }
      if (rowFilter !== '') {
        filteredMovies = filteredMovies.filter((movie) => (movie.nameRU.includes(rowFilter)))
      }
      setAllowedMovies(filteredMovies)
    }
  }, [isShortMovies, rowFilter, allMovies])

  return (
    <div>
      <MoviesPage movies={allowedMovies} isButtonVisible={true}
        rowValue={rowFilter} isShortMovies={isShortMovies}
        handleLike={handleLike} handleDelete={handleDelete} onChangeFilter={onChangeFilter} />
    </div>
  );
}

export default Movies;
