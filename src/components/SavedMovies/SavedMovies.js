
import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies({ handleLike, handleDelete }) {

  const { savedMovies } = useContext(MoviesContext);

  const [rowFilter, setRowFilter] = useState('')
  const [isShortMovies, setIsShortMovies] = useState(false)
  const [allowedMovies, setAllowedMovies] = useState([])

  const checkLocalFilters = () => {
    if (localStorage.getItem('filters-movie-saved')) {
      setRowFilter(JSON.parse(localStorage.getItem('filters-movie-saved')).row)
      setIsShortMovies(JSON.parse(localStorage.getItem('filters-movie-saved')).short)
    }
  }

  useEffect(() => {
    checkLocalFilters()
  }, [])

  const onChangeFilter = (namelocalStorageFilter) => {
    setRowFilter(JSON.parse(localStorage.getItem(namelocalStorageFilter)).row)
    setIsShortMovies(JSON.parse(localStorage.getItem(namelocalStorageFilter)).short)
    checkLocalFilters()
  }

  useEffect(() => {
    let filteredMovies = savedMovies
    if (isShortMovies) {
      filteredMovies = filteredMovies.filter((movie) => (movie.duration <= 40))
    }
    if (rowFilter !== '') {
      filteredMovies = filteredMovies.filter((movie) => (movie.nameRU.includes(rowFilter)))
    }
    setAllowedMovies(filteredMovies)

  }, [isShortMovies, rowFilter, savedMovies])

  return (
    <MoviesPage movies={allowedMovies} isButtonVisible={false} isSavedPage={true}
      rowValue={rowFilter} isShortMovies={isShortMovies}
      handleLike={handleLike} handleDelete={handleDelete} onChangeFilter={onChangeFilter} />
  );
}

export default SavedMovies;
