
import { portfolioLinks } from '../../../constans/testConstans';
import './Portfolio.css';
import PortfolioLink from './PortfolioLink/PortfolioLink';

function Portfolio() {

  const portfolioElements = portfolioLinks.map(elem => <PortfolioLink data={elem} />)

  return (
    <div className="portfolio">
      <div className='portfolio__container container'>
        <div className='portfolio__container-link'>
          <a className='portfolio__link link' href='https://github.com/Elena-Cake' target="_blank" rel="noreferrer">Портфолио</a>
        </div>
        <ul className='portfolio__items'>
          {portfolioElements}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
