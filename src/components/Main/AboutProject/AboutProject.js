
import Title from '../Title/Title';
import './AboutProject.css';

function AboutProject() {
  return (
    <div className="about">
      <Title text={'О проекте'} />
      <div className='about__info'>
        <div className='about__point'>
          <h3 className='about__point-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about_description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about__point'>
          <h3 className='about__point-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about_description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about__shema'>
        <p className='about__shema_text_bold about__shema_back_green'>1 неделя</p>
        <p className='about__shema_text_transparent about__shema_text_backend'>Back-end</p>
        <p className='about__shema_text_bold about__shema_back_grey'>4 недели</p>
        <p className='about__shema_text_transparent about__shema_text_frontend'>Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
