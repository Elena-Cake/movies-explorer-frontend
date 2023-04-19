
import { dataRowsRegister } from '../../../constans/testConstans';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Register.css';

function Register() {

  const rowsElements = dataRowsRegister.map((row) => {
    return <FormRow data={row} />
  })

  return (
    <AuthForm isLoginPage={false} rowsElements={rowsElements} />
  );
}

export default Register;
