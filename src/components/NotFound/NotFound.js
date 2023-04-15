
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="found">
      <div className='found__container'>
        <h1 className='found__title'>404</h1>
        <p className='found__text'>Страница не найдена</p>
      </div>
      <a className='found__back-link link' onClick={goBack}>Назад</a>
    </div>
  );
}

export default NotFound;
