
import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { useFormAndValidation } from '../../hooks/useValidationForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ logOut, textErrorAuth, isEditMode, handleEditMode }) {

  const { currentUser, onUpdateUser } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues, setIsValid, resetForm } = useFormAndValidation();

  const [defaultName, setDefaultName] = useState(currentUser.name);
  const [defaultEmail, setDefaultEmail] = useState(currentUser.email);

  const [isValidEditForm, setIsValidEditForm] = useState(false);

  useEffect(() => {
    setIsValidEditForm(isValid && (defaultEmail !== values.email || defaultName !== values.name))
  }, [values]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(
      {
        values: values,
        resetForm: resetForm,
      }
    );
  }

  //заполненные поля при открытии
  useEffect(() => {
    if (isEditMode) {
      setValues({ ...values, 'name': currentUser.name, 'email': currentUser.email })
      setIsValid(false);
      setDefaultName(currentUser.name)
      setDefaultEmail(currentUser.email)
    }
  }, [isEditMode]);

  return (
    <div className="profile">
      {!isEditMode ?
        <div className='profile__window window'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <ul className='profile__rows'>
            <li className='profile__row' key={0}>
              <p className='row__title'>Имя</p>
              <p className='row__data'>{currentUser.name}</p>
            </li>
            <li className='profile__row' key={1}>
              <p className='row__title'>E-mail</p>
              <p className='row__data'>{currentUser.email}</p>
            </li>
          </ul>
          <div className='profile__settings'>
            <button className='profile__edit-button button' onClick={handleEditMode}>Редактировать</button>
            <button className='profile__exit-button button' onClick={logOut}>Выйти из аккаунта</button>
          </div>
        </div>
        :
        <form className='profile__window window' onSubmit={handleSubmit}>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <ul className='profile__rows'>
            <li className='profile__row' key={0}>
              <p className='row__title'>Имя</p>
              <input
                className='row__data'
                placeholder='Введите имя'
                name="name"
                value={values.name || ''}
                onChange={handleChange}
                required />
              <span className={`row__error ${errors.name ? 'row__error_active' : ''}`}>{errors.name}</span>
            </li>
            <li className='profile__row' key={1}>
              <p className='row__title'>E-mail</p>
              <input
                className='row__data'
                placeholder='Введите почту'
                name="email"
                value={values.email || ''}
                onChange={handleChange}
                type='email'
                required />
              <span className={`row__error ${errors.email ? 'row__error_active' : ''}`}>{errors.email}</span>
            </li>
          </ul>
          <div className='profile__button-container button-container'>
            <span className={`profile__span-error span-error ${textErrorAuth !== '' ? 'span-error_active' : ''}`}>{textErrorAuth}</span>
            <button
              className={`profile__save-button button ${!isValidEditForm ? 'profile__save-button_disable' : ''}`}
              disabled={!isValidEditForm}
            >Сохранить</button>
          </div>
        </form>}
    </div >
  );
}

export default Profile;
