
import { NavLink } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({ isLoginPage = true, rowsElements }) {

  return (
    <div className="auth">
      <div className='auth__logo' ></div>
      {isLoginPage ?
        <h1 className='auth__title'>Рады видеть!</h1>
        :
        <h1 className='auth__title'>Добро пожаловать!</h1>
      }
      <div className='auth__rows'>
        {rowsElements}
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
