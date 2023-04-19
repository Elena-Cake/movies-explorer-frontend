
import { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { dataProfile } from '../../constans/testConstans';

function Profile() {
  const navigate = useNavigate();
  const [isEditActive, setIsEditActive] = useState(false)

  const activateEdit = () => {
    setIsEditActive(!isEditActive)
  }

  const logOut = () => {
    navigate("/")
  }

  return (
    <div className="profile">
      <div className='profile__window window'>
        <h1 className='profile__title'>Привет, {dataProfile.name}!</h1>
        <div className='profile__rows'>
          <div className='profile__row'>
            <p className='row__title'>Имя</p>
            {!isEditActive ?
              <p className='row__data'>{dataProfile.name}</p>
              :
              <input className='row__data' placeholder='Введите имя' value={dataProfile.name} />
            }
          </div>
          <div className='profile__row'>
            <p className='row__title'>E-mail</p>
            {!isEditActive ?
              <p className='row__data'>{dataProfile.email}</p>
              :
              <input className='row__data' placeholder='Введите почту' value={dataProfile.email} />
            }
          </div>
        </div>
        {!isEditActive ?
          <div className='profile__settings'>

            <button className='profile__edit-button button' onClick={activateEdit}>Редактировать</button>
            <button className='profile__exit-button button' onClick={logOut}>Выйти из аккаунта</button>
          </div>
          :
          <div className='profile__button-container button-container'>
            <span className='profile__span-error span-error'>При обновлении профиля произошла ошибка.</span>
            <button className='profile__save-button button profile__save-button_disable' onClick={activateEdit}>Сохранить</button>
          </div>
        }
      </div>
    </div >
  );
}

export default Profile;
