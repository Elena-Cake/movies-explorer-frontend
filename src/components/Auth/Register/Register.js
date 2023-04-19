
import { dataRowsRegister, textsRegister } from '../../../constans/testConstans';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Register.css';

function Register() {

  const rowsElements = dataRowsRegister.map((row) => {
    return <FormRow data={row} />
  })

  return (
    <AuthForm
      rowsElements={rowsElements}
      texts={textsRegister}
      path='/signin'
    />
  );
}

export default Register;
