
import { useState } from 'react';
import './Profile.css';

function Profile() {

  const [isEditActive, setIsEditActive] = useState(false)

  const activateEdit = () => {
    setIsEditActive(!isEditActive)
  }

  // Тестовые данные для заполнения
  const data = {
    name: 'ревьюер',
    email: 'pochta@yandex.ru'
  }

  return (
    <div className="profile">
      <div className='profile__window window'>
        <h1 className='profile__title'>Привет, {data.name}!</h1>
        <div className='profile__rows'>
          <div className='profile__row'>
            <p className='row__title'>Имя</p>
            {!isEditActive ?
              <p className='row__data'>{data.name}</p>
              :
              <input className='row__data' placeholder='Введите имя' value={data.name} />
            }
          </div>
          <div className='profile__row'>
            <p className='row__title'>E-mail</p>
            {!isEditActive ?
              <p className='row__data'>{data.email}</p>
              :
              <input className='row__data' placeholder='Введите почту' value={data.email} />
            }
          </div>
        </div>
        {!isEditActive ?
          <div className='profile__settings'>

            <button className='profile__edit-button button' onClick={activateEdit}>Редактировать</button>
            <button className='profile__exit-button button'>Выйти из аккаунта</button>
          </div>
          :
          <button className='profile__save-button button' onClick={activateEdit}>Сохранить</button>
        }
      </div>
    </div >
  );
}

export default Profile;
