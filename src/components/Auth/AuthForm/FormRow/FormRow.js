
import './FormRow.css';
import { useFormAndValidation } from '../../../../hooks/useValidationForm'
import { useEffect } from 'react';
import { PATTERN_URL } from '../../../../constans/inputsData';

function FormRow({ data, onChangeButtonActive }) {

  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const nameInput = data.name;

  useEffect(() => {
    onChangeButtonActive(isValid)
  }, [isValid])

  return (
    <li className="row">
      <p className='row__title'>{data.title}</p>
      {data.validation.type === 'email' ?
        <input
          className={`row__input ${errors[nameInput] ? 'row__input_error' : ''}`}
          name={data.name}
          placeholder={`Введите ${data.title}`}
          value={values[nameInput] || ''}
          type={data.validation.type}
          pattern={PATTERN_URL}
          required={data.validation.required ? data.validation.required : false}
          onChange={handleChange}
        />
        :
        <input
          className={`row__input ${errors[nameInput] ? 'row__input_error' : ''}`}
          name={data.name}
          placeholder={`Введите ${data.title}`}
          value={values[nameInput] || ''}
          type={data.validation.type || 'text'}
          required={data.validation.required}
          onChange={handleChange}
        />
      }

      <span className={`row__error ${errors[nameInput] ? 'row__error_active' : ''}`}>{errors[nameInput]}</span>
    </li>
  );
}

export default FormRow;
