
import './PortfolioLink.css';

function PortfolioLink({ data }) {
  return (
    <a href={data.link} className='portfolio-link link' >
      <p className='portfolio-link__text'>{data.name}</p>
      <div className='portfolio-link__arrow'></div>
    </a>
  );
}

export default PortfolioLink;
