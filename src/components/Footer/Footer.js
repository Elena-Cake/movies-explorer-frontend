
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='footer__container container'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <p className='footer__year'>&#169;2023</p>
        <a className='footer__yp-link link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
        <a className='footer__git-link link' href='https://github.com/Elena-Cake'>Github</a>
      </div>
    </div>
  );
}

export default Footer;
