
import './Portfolio.css';
import PortfolioLink from './PortfolioLink/PortfolioLink';

function Portfolio() {
  const portfolioLinks = [
    { name: 'Статичный сайт', link: 'https://elena-cake.github.io/lubimovka/' },
    { name: 'Адаптивный сайт', link: 'https://elena-cake.github.io/lubimovka/' },
    { name: 'Одностраничное приложение', link: 'https://elena-cake.github.io/lubimovka/' }
  ]

  const portfolioElements = portfolioLinks.map(elem => <PortfolioLink data={elem} />)

  return (
    <div className="portfolio">
      <div className='portfolio__container container'>
        <div className='portfolio__container-link'>
          <a className='portfolio__link link' href='https://github.com/Elena-Cake'>Портфолио</a>
        </div>
        {portfolioElements}
      </div>
    </div>
  );
}

export default Portfolio;
