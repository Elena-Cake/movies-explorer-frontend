
import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ handleLike, handleDelete }) {

  const { savedMovies } = useContext(MoviesContext);
  const [isPreloaderActive, setIsPreloaderActive] = useState(false)

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

  const onChangeFilter = () => {
    setRowFilter(JSON.parse(localStorage.getItem('filters-movie-saved')).row)
    setIsShortMovies(JSON.parse(localStorage.getItem('filters-movie-saved')).short)
    checkLocalFilters()
  }

  useEffect(() => {
    setIsPreloaderActive(true)
    let filteredMovies = savedMovies
    if (isShortMovies) {
      filteredMovies = filteredMovies.filter((movie) => (movie.duration <= 40))
    }
    if (rowFilter !== '') {
      filteredMovies = filteredMovies.filter((movie) => (movie.nameRU.toLowerCase().includes(rowFilter.toLowerCase())))
    }
    setAllowedMovies(filteredMovies)

    setIsPreloaderActive(false);

  }, [isShortMovies, rowFilter, savedMovies])

  return (
    <section className="movies movies-saved">
      <MoviesPage movies={allowedMovies} isButtonVisible={false} isSavedPage={true}
        rowValue={rowFilter} isShortMovies={isShortMovies}
        handleLike={handleLike} handleDelete={handleDelete} onChangeFilter={onChangeFilter} />
      <Preloader isActive={isPreloaderActive} />
    </section>
  );
}

export default SavedMovies;
