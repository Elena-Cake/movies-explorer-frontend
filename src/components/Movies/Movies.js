
import './Movies.css';
import MoviesPage from '../MoviesPage/MoviesPage';

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


  return (
    <MoviesPage movies={movies} isButtonVisible={true} />
  );
}

export default Movies;
