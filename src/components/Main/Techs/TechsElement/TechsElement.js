
import './TechsElement.css';

function TechsElement({ text }) {

  return (
    <div className="techs-element">
      <p className='techs-element__text'>{text}</p>
    </div>
  );
}

export default TechsElement;
