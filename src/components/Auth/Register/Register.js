
import { useState } from 'react';
import { dataRowsRegister, textsRegister } from '../../../constans/testConstans';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Register.css';
import { endpoints } from '../../../constans/pathContent';

function Register() {


  const [IsButtonActive, setIsButtonActive] = useState(true)

  const onChangeButtonActive = (isValid) => {
    setIsButtonActive(isValid);
  }

  const rowsElements = dataRowsRegister.map((row) => {
    return <FormRow data={row} onChangeButtonActive={onChangeButtonActive} />
  })

  return (
    <AuthForm
      rowsElements={rowsElements}
      texts={textsRegister}
      path={endpoints.LOGIN}
      isValid={IsButtonActive}
    />
  );
}

export default Register;
