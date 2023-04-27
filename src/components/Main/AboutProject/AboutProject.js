
import Title from '../Title/Title';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about ">
      <div className='about__container container'>
        <Title text={'О проекте'} />
        <ul className='about__info'>
          <li className='about__point'>
            <h3 className='about__point-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className='about__point'>
            <h3 className='about__point-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='about__shema'>
          <p className='about__text about__text_type_bold about__back about__back_color_green'>1 неделя</p>
          <p className='about__text about__text_type_bold about__back about__back_color_grey'>4 недели</p>
          <p className='about__text about__text_type_transparent'>Back-end</p>
          <p className='about__text about__text_type_transparent'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
