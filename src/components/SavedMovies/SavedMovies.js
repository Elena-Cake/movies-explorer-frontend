
import Footer from '../Footer/Footer';
import MoviesPage from '../MoviesPage/MoviesPage';
import './SavedMovies.css';

function SavedMovies() {

  // Тестовые данные для заполнения
  const movies = [
    {
      country: "США",
      created_at: "2020-11-23T14:12:21.376Z",
      description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена.",
      director: "Стивен Кайак ",
      duration: 48 * 60,
      id: 1,
      image: {
        previewUrl: "https://thumbs.dfs.ivi.ru/storage8/contents/7/0/708be8ca0ca605c4ddc97df63a4373.jpg"
      },
      nameEN: "Stones in Exile",
      nameRU: "33 слова о дизайне",
      trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
      updated_at: "2020-11-23T14:12:21.376Z",
      year: "2010"
    }
  ];

  return (
    <div>
      <MoviesPage movies={movies} isButtonVisible={false} />
      <Footer />
    </div>
  );
}

export default SavedMovies;
