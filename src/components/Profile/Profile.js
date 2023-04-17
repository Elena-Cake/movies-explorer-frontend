
import './Profile.css';

function Profile() {

  // Тестовые данные для заполнения
  const data = {
    name: 'ревьюер',
    email: 'pochta@yandex.ru'
  }

  return (
    <div className="profile">
      <h1 className='profile__title'>Привет, {data.name}!</h1>
      <div className='profile__rows'>
        <div className='profile__row'>
          <p className='row__title'>Имя</p>
          <input className='row__data' placeholder={data.name} />
        </div>
        <div className='profile__row'>
          <p className='row__title'>E-mail</p>
          <input className='row__data' placeholder={data.email} />
        </div>
      </div>
      <div className='profile__settings'>
        <button className='profile__edit-button button'>Редактировать</button>
        <button className='profile__exit-button button'>Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
