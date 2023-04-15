
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Login.css';

function Login() {

  // dataRows = [{ title: 'Пароль', error: '', name: 'pass' }]
  const dataRowsLogin = [
    { title: 'E-mail', error: '', name: 'email' },
    { title: 'Пароль', error: '', name: 'pass' }
  ]

  const rowsElements = dataRowsLogin.map((row) => {
    return <FormRow data={row} />
  })

  return (
    <AuthForm rowsElements={rowsElements} />
  );
}

export default Login;
