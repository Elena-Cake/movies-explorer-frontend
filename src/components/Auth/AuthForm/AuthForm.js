
import { NavLink, Route, Routes } from 'react-router-dom';
import './AuthForm.css';
import FormRow from './FormRow/FormRow';

function AuthForm({ isLoginPage = true }) {

  const RowsElements = <FormRow />

  return (
    <div className="auth">
      <div className='auth__logo' ></div>
      {isLoginPage ?
        <h1 className='auth__title'>Рады видеть!</h1>
        :
        <h1 className='auth__title'>Добро пожаловать!</h1>
      }
      <div className='auth__rows'>
        {RowsElements}
      </div>
      <button className='auth__button button'>Зарегистрироваться</button>
      {isLoginPage ?
        <p className='auth__text'>
          Ещё не зарегистрированы?
          <NavLink className='auth__link link' to='/signup'>
            Регистрация
          </NavLink>
        </p>
        :
        <p className='auth__text'>
          Уже зарегистрированы?
          <NavLink className='auth__link link' to='/signin'>
            Войти
          </NavLink>
        </p>
      }

    </div >
  );
}

export default AuthForm;
