
import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Login.css';
import { dataRowsLogin, textsLogin } from '../../../constans/inputsData';
import { endpoints } from '../../../constans/pathContent';

function Login({ onSubmitForm, textErrorAuth, deleteErrorSubmit }) {

  const [IsButtonActive, setIsButtonActive] = useState(true)
  const [inputsValues, setInputsValues] = useState([]);

  const onSetValues = (values) => {
    setInputsValues(values)
  }

  const onChangeButtonActive = (isValid) => {
    setIsButtonActive(isValid);
  }

  const rowsElements = dataRowsLogin.map((row, i) => {
    return <FormRow key={i} data={row} onChangeButtonActive={onChangeButtonActive} onSetValues={onSetValues} />
  })

  return (
    <AuthForm
      rowsElements={rowsElements}
      texts={textsLogin}
      path={endpoints.REGISTER}
      isValid={IsButtonActive}
      onSendForm={onSubmitForm}
      typeForm={'Login'}
      inputsValues={inputsValues}
      textErrorAuth={textErrorAuth}
      deleteErrorSubmit={deleteErrorSubmit}
    />
  );
}

export default Login;
