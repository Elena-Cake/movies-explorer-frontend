
import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useValidationForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ logOut, onUpdateUser, textErrorAuth, isEditMode, handleEditMode }) {

  const currentUserData = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues, setIsValid, resetForm } = useFormAndValidation();
  const navigate = useNavigate();

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
      setValues({ ...values, 'name': currentUserData.name, 'email': currentUserData.email })
      setIsValid(true)
    }
  }, [isEditMode]);

  return (
    <div className="profile">
      {!isEditMode ?
        <div className='profile__window window'>
          <h1 className='profile__title'>Привет, {currentUserData.name}!</h1>
          <ul className='profile__rows'>
            <li className='profile__row'>
              <p className='row__title'>Имя</p>
              <p className='row__data'>{currentUserData.name}</p>
            </li>
            <li className='profile__row'>
              <p className='row__title'>E-mail</p>
              <p className='row__data'>{currentUserData.email}</p>
            </li>
          </ul>
          <div className='profile__settings'>
            <button className='profile__edit-button button' onClick={handleEditMode}>Редактировать</button>
            <button className='profile__exit-button button' onClick={logOut}>Выйти из аккаунта</button>
          </div>
        </div>
        :
        <form className='profile__window window' onSubmit={handleSubmit}>
          <h1 className='profile__title'>Привет, {currentUserData.name}!</h1>
          <ul className='profile__rows'>
            <li className='profile__row'>
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
            <li className='profile__row'>
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
              className={`profile__save-button button ${!isValid ? 'profile__save-button_disable' : ''}`}
              disabled={!isValid}
            >Сохранить</button>
          </div>
        </form>}
    </div >
  );
}

export default Profile;
