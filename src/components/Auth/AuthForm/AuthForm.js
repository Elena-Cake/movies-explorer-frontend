
import { NavLink } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({ isLoginPage = true, rowsElements }) {

  return (
    <div className="auth">
      <div className='auth__window window'>
        <NavLink className='auth__link-logo link' to='/'>
          <div className='auth__logo' ></div>
        </NavLink>
        {isLoginPage ?
          <h1 className='auth__title'>Рады видеть!</h1>
          :
          <h1 className='auth__title'>Добро пожаловать!</h1>
        }
        <div className='auth__rows'>
          {rowsElements}
        </div>
        {isLoginPage ?
          <div className='auth__actions'>
            <div className='profile__button-container button-container'>
              <span className='profile__span-error span-error'>Вы ввели неправильный логин или пароль.</span>
              <button className='auth__button button'>Войти</button>
            </div>
            <p className='auth__text'>
              Ещё не зарегистрированы?
              <NavLink className='auth__link link' to='/signup'>
                Регистрация
              </NavLink>
            </p>
          </div>
          :
          <div className='auth__actions'>
            <div className='profile__button-container button-container'>
              <span className='profile__span-error span-error span-error_active'>Пользователь с таким email уже существует.</span>
              <button className='auth__button button auth__button_disable'>Зарегистрироваться</button>
            </div>
            <p className='auth__text'>
              Уже зарегистрированы?
              <NavLink className='auth__link link' to='/signin'>
                Войти
              </NavLink>
            </p>
          </div>

        }
      </div>
    </div >
  );
}

export default AuthForm;
