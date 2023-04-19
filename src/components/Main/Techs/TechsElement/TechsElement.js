
import './TechsElement.css';

function TechsElement({ text }) {

  return (
    <li className="techs-element">
      <p className='techs-element__text'>{text}</p>
    </li>
  );
}

export default TechsElement;
