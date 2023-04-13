
import './Portfolio.css';
import PortfolioLink from './PortfolioLink/PortfolioLink';

function Portfolio() {
  const portfolioLinks = [
    { name: 'Статичный сайт', link: '#' },
    { name: 'Адаптивный сайт', link: '#' },
    { name: 'Одностраничное приложение', link: '#' }
  ]

  const portfolioElements = portfolioLinks.map(elem => <PortfolioLink data={elem} />)

  return (
    <div className="portfolio">
      <div className='portfolio__container'>
        <a className='portfolio__link link' href='https://github.com/Elena-Cake'>Портфолио</a>
      </div>
      {portfolioElements}
    </div>
  );
}

export default Portfolio;
