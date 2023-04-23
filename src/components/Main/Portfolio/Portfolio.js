
import { portfolioLinks } from '../../../constans/mainPageData';
import './Portfolio.css';
import PortfolioLink from './PortfolioLink/PortfolioLink';

function Portfolio() {

  const portfolioElements = portfolioLinks.map((elem, i) => <PortfolioLink key={i} data={elem} />)

  return (
    <section className="portfolio">
      <div className='portfolio__container container'>
        <div className='portfolio__container-link'>
          <a className='portfolio__link link' href='https://github.com/Elena-Cake' target="_blank" rel="noreferrer">Портфолио</a>
        </div>
        <ul className='portfolio__items'>
          {portfolioElements}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
