
import { NavLink } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({ texts, path, rowsElements }) {

  return (
    <div className="auth">
      <div className='auth__window window'>
        <NavLink className='auth__link-logo link' to='/'>
          <div className='auth__logo' ></div>
        </NavLink>
        <h1 className='auth__title'>{texts.title}</h1>
        <div className='auth__rows'>
          {rowsElements}
        </div>
        <div className='auth__actions'>
          <div className='profile__button-container button-container'>
            <span className='profile__span-error span-error'>Вы ввели неправильный логин или пароль.</span>
            <button className='auth__button button'>{texts.button}</button>
          </div>
          <p className='auth__text'>
            {texts.question}
            <NavLink className='auth__link link' to={path}>
              {texts.navlink}
            </NavLink>
          </p>
        </div>
      </div>
    </div >
  );
}

export default AuthForm;
