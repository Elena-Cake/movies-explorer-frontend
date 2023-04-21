
import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Login.css';
import { dataRowsLogin, textsLogin } from '../../../constans/inputsData';
import { endpoints } from '../../../constans/pathContent';

function Login({ onSubmitForm }) {
  const [IsButtonActive, setIsButtonActive] = useState(true)

  const onChangeButtonActive = (isValid) => {
    setIsButtonActive(isValid);
  }

  const rowsElements = dataRowsLogin.map((row) => {
    return <FormRow data={row} onChangeButtonActive={onChangeButtonActive} />
  })

  return (
    <AuthForm
      rowsElements={rowsElements}
      texts={textsLogin}
      path={endpoints.REGISTER}
      isValid={IsButtonActive}
      onSubmitForm={onSubmitForm}
    />
  );
}

export default Login;
