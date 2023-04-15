
import './Profile.css';

function Profile() {

  const data = {
    name: 'ревьюер',
    email: 'pochta@yandex.ru'
  }

  return (
    <div className="profile">
      <h1>Привет, ревьюер!</h1>
      <div className='profile__row'>
        <p className='row__title'>Имя</p>
        <input className='row__input' placeholder={data.name} />
      </div>
      <div className='profile__row'>
        <p className='row__title'>E-mail</p>
        <input className='row__input' placeholder={data.email} />
      </div>
    </div>
  );
}

export default Profile;
