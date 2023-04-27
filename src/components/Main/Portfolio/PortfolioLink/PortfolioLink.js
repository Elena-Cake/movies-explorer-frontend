
import './PortfolioLink.css';

function PortfolioLink({ data }) {
  return (
    <li className='portfolio-link'>
      <a href={data.link} className='portfolio-link__a link' target="_blank" rel="noreferrer">
        <p className='portfolio-link__text'>{data.name}</p>
        <div className='portfolio-link__arrow'></div>
      </a>
    </li>
  );
}

export default PortfolioLink;
