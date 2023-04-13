
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Movie from '../Movie/Movie';

function Movies() {
  const movies = [
    {
      country: "США",
      created_at: "2020-11-23T14:12:21.376Z",
      description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена.",
      director: "Стивен Кайак ",
      duration: 67,
      id: 1,
      image: {
        previewUrl: "https://cdn5.vedomosti.ru/image/2019/7u/1eejw4/original-1tbo.jpg"
      },
      nameEN: "Stones in Exile",
      nameRU: "33 слова о дизайне",
      trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
      updated_at: "2020-11-23T14:12:21.376Z",
      year: "2010"
    }
  ];

  // const movieElements = movies.map((movie) => <Movie data={movie} />)

  const movieElements = [];
  for (let i = 0; i < 30; i++) {
    movieElements.push(movies.map((movie) => <Movie data={movie} />))
  }


  return (
    <div className="movies">
      <SearchForm />
      <div className='movies__container'>
        {movieElements}
      </div>
    </div>
  );
}

export default Movies;
