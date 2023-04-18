
import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import Movie from '../Movie/Movie';

function MoviesPage({ movies, isButtonVisible }) {

  // const [isButtonVisible, setIsButtonVisible] = useState(false)
  // const movieElements = movies.map((movie) => <Movie data={movie} />)

  const movieElements = [];
  for (let i = 0; i < 12; i++) {
    movieElements.push(movies.map((movie) => <Movie data={movie} />))
  }

  // useEffect(() => {
  //   movies.length > movieElements.length ?
  //     setIsButtonVisible(true) :
  //     setIsButtonVisible(false)
  // }, [movies])

  return (
    <div className="movies">
      <SearchForm />
      <div className='movies__container'>
        {movieElements}
      </div>
      <div className='movies__more'>
        {isButtonVisible &&
          <button className='movies__more-button button'>Ещё</button>
        }
      </div>
    </div>
  );
}

export default MoviesPage;
