
import './PortfolioLink.css';

function PortfolioLink({ data }) {
  return (
    <li className='portfolio__item'>
      <a href={data.link} className='portfolio-link link' target="_blank" rel="noreferrer">
        <p className='portfolio-link__text'>{data.name}</p>
        <div className='portfolio-link__arrow'></div>
      </a>
    </li>
  );
}

export default PortfolioLink;
