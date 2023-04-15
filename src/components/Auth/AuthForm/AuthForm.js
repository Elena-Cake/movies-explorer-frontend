
import { NavLink } from 'react-router-dom';
import './AuthForm.css';
import FormRow from './FormRow/FormRow';

function AuthForm() {

  const RowsElements = <FormRow />

  return (
    <div className="auth">
      <div className='auth__logo' ></div>
      <h1 className='auth__title'>Добро пожаловать!</h1>
      <div className='auth__rows'>
        {RowsElements}
      </div>
      <button className='auth__button button'>Зарегистрироваться</button>
      <p className='auth__text'>
        Уже зарегистрированы?
        <NavLink className='auth__link link'>
          Войти
        </NavLink>
      </p>
    </div >
  );
}

export default AuthForm;
