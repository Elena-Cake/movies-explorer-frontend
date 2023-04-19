
import Title from '../Title/Title';
import './Techs.css';
import TechsElement from './TechsElement/TechsElement';

function Techs() {
  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
  const techsElements = techs.map((name) => <TechsElement text={name} />)

  return (
    <div className="techs">
      <div className='techs__container container'>
        <Title text={'Технологии'} />
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__elements'>
          {techsElements}
        </ul>
      </div>
    </div>
  );
}

export default Techs;
