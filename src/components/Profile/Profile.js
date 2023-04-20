
import { useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useValidationForm';
import { dataProfile } from '../../constans/movies';

function Profile() {

  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation();
  const navigate = useNavigate();
  const [isEditActive, setIsEditActive] = useState(false)

  const activateEdit = () => {
    setIsEditActive(!isEditActive)
  }

  const logOut = () => {
    navigate("/")
  }

  //заполненные поля при открытии
  useEffect(() => {
    if (isEditActive) {
      setValues({ ...values, 'name': dataProfile.name, 'email': dataProfile.email })
      setIsValid(true)
    }
  }, [isEditActive]);

  return (
    <div className="profile">
      {!isEditActive ?
        <div className='profile__window window'>
          <h1 className='profile__title'>Привет, {dataProfile.name}!</h1>
          <ul className='profile__rows'>
            <li className='profile__row'>
              <p className='row__title'>Имя</p>
              <p className='row__data'>{dataProfile.name}</p>
            </li>
            <li className='profile__row'>
              <p className='row__title'>E-mail</p>
              <p className='row__data'>{dataProfile.email}</p>
            </li>
          </ul>
          <div className='profile__settings'>
            <button className='profile__edit-button button' onClick={activateEdit}>Редактировать</button>
            <button className='profile__exit-button button' onClick={logOut}>Выйти из аккаунта</button>
          </div>
        </div>
        :
        <form className='profile__window window'>
          <h1 className='profile__title'>Привет, {dataProfile.name}!</h1>
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
            <span className={`profile__span-error span-error ${!isValid ? 'span-error_active' : ''}`}>При обновлении профиля произошла ошибка.</span>
            <button
              className={`profile__save-button button ${!isValid ? 'profile__save-button_disable' : ''}`}
              onClick={activateEdit}
              disabled={!isValid}
            >Сохранить</button>
          </div>
        </form>}
    </div >
  );
}

export default Profile;
