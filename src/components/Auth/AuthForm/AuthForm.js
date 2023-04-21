
import { NavLink } from 'react-router-dom';
import './AuthForm.css';
import { endpoints } from '../../../constans/pathContent';
import { dataRowsRegister } from '../../../constans/inputsData';
import { useFormAndValidation } from '../../../hooks/useValidationForm';

function AuthForm({ texts, path, rowsElements, isValid, onSendForm, typeForm }) {

  const onSubmitForm = (e) => {
    e.preventDefault()
    // достать значения формы
    const formInputs = Array.from(e.target.closest('form').elements).filter((item) => !!item.name).map(el => {
      const { name, value } = el;
      return { name, value }
    })
    // объединить в объект
    const formData = {}
    for (let input of formInputs) {
      formData[input.name] = input.value
    }
    onSendForm(formData)
  }

  return (
    <div className="auth">
      <form className='auth__window window'>
        <NavLink className='auth__link-logo link' to={endpoints.ABOUT}>
          <div className='auth__logo' ></div>
        </NavLink>
        <h1 className='auth__title'>{texts.title}</h1>
        <ul className='auth__rows'>
          {rowsElements}
        </ul>
        <div className='auth__actions'>
          <div className='profile__button-container button-container'>
            <span className={`profile__span-error span-error ${!isValid ? 'span-error_active' : ''}`}>Вы ввели неправильный логин или пароль.</span>
            <button
              className={`auth__button button ${!isValid ? 'auth__button_disable' : ''}`}
              disabled={!isValid}
              onClick={onSubmitForm}
            >{texts.button}</button>
          </div>
          <p className='auth__text'>
            {texts.question}
            <NavLink className='auth__link link' to={path}>
              {texts.navlink}
            </NavLink>
          </p>
        </div>
      </form>
    </div >
  );
}

export default AuthForm;
