
import Title from '../Title/Title';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="me">
      <div className='me__container container'>
        <Title text={'Студент'} />
        <div className='me__info'>
          <h2 className='me__name'>Елена</h2>
          <h3 className='me__about'>Фронтенд-разработчик, 26 лет</h3>
          <p className='me__text'>Я живу в Москве. Закончила бакалавриат и магистратуру по направлению "Информационная безопасность" МТУСИ.
            Мое хобби - делать вкусные десерты. С 2019 года работаю в компании АО "АНЦ" программистом. Пройдя курс по веб-разработке поняла, что нашла то направление, которое приносит мне удовольствие.
          </p>
          <a className='me__git-link link' href='https://github.com/Elena-Cake' target="_blank" rel="noreferrer">Github</a>
          <div className='me__foto'></div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
