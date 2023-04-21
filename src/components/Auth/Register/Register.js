
import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import FormRow from '../AuthForm/FormRow/FormRow';
import './Register.css';
import { dataRowsRegister, textsRegister } from '../../../constans/inputsData';
import { endpoints } from '../../../constans/pathContent';

function Register({ onSubmitForm }) {
  const [IsButtonActive, setIsButtonActive] = useState(true)
  const [inputsValues, setInputsValues] = useState([]);

  const onSetValues = (values) => {
    setInputsValues(values)
  }

  const onChangeButtonActive = (isValid) => {
    setIsButtonActive(isValid);
  }

  const rowsElements = dataRowsRegister.map((row) => {
    return <FormRow data={row} onChangeButtonActive={onChangeButtonActive} onSetValues={onSetValues} />
  })

  return (
    <AuthForm
      rowsElements={rowsElements}
      texts={textsRegister}
      path={endpoints.LOGIN}
      isValid={IsButtonActive}
      onSendForm={onSubmitForm}
      typeForm={'Register'}
      inputsValues={inputsValues}
    />
  );
}

export default Register;
