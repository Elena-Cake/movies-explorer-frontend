
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Register.css';

function Register() {

  const dataRowsRegister = [
    { title: 'Имя', error: '', name: 'name' },
    { title: 'E-mail', error: '', name: 'email' },
    { title: 'Пароль', error: 'Что-то пошло не так...', name: 'pass', value: '1111' }
  ]

  const rowsElements = dataRowsRegister.map((row) => {
    return <FormRow data={row} />
  })

  return (
    <AuthForm isLoginPage={false} rowsElements={rowsElements} />
  );
}

export default Register;
