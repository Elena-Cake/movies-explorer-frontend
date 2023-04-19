
import { dataRowsLogin, textsLogin } from '../../../constans/testConstans';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Login.css';

function Login() {

  const rowsElements = dataRowsLogin.map((row) => {
    return <FormRow data={row} />
  })

  return (
    <AuthForm
      rowsElements={rowsElements}
      texts={textsLogin}
      path='/signup'
    />
  );
}

export default Login;
