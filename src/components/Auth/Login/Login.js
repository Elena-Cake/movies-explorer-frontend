
import { dataRowsLogin } from '../../../constans/testConstans';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Login.css';

function Login() {

  const rowsElements = dataRowsLogin.map((row) => {
    return <FormRow data={row} />
  })

  return (
    <AuthForm rowsElements={rowsElements} />
  );
}

export default Login;
