
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
    localStorage.setItem('filters-movie-saved', JSON.stringify({ row: '', short: false }))
    checkLocalFilters()
  }, [])

  const onChangeFilter = () => {
    setRowFilter(JSON.parse(localStorage.getItem('filters-movie-saved')).row)
    setIsShortMovies(JSON.parse(localStorage.getItem('filters-movie-saved')).short)
    checkLocalFilters()
  }

  useEffect(() => {
    let filteredMovies = savedMovies
    if (isShortMovies) {
      filteredMovies = filteredMovies.filter((movie) => (movie.duration <= 40))
    }
    if (rowFilter !== '') {
      filteredMovies = filteredMovies.filter((movie) => (movie.nameRU.toLowerCase().includes(rowFilter.toLowerCase())))
    }
    setAllowedMovies(filteredMovies)
  }, [isShortMovies, rowFilter, savedMovies])

  return (
    <section className="movies movies-saved">
      <MoviesPage movies={allowedMovies} moviesVisible={allowedMovies} isButtonVisible={false} isSavedPage={true}
        rowValue={rowFilter} isShortMovies={isShortMovies}
        handleLike={handleLike} handleDelete={handleDelete} onChangeFilter={onChangeFilter} />
    </section>
  );
}

export default SavedMovies;
