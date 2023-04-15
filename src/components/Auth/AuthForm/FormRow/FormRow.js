
import './FormRow.css';

function FormRow({ data = { title: 'Пароль', error: '', name: 'pass', value: '' } }) {

  return (
    <div className="row">
      <p className='row__title'>{data.title}</p>
      <input
        className={`row__input ${data.error !== '' && 'row__input_error'}`}
        name={data.name}
        value={data.value}
        type={data.name === 'pass' && 'password'}
      />
      {data.error !== '' &&
        <span className='row__error'>{data.error}</span>}
    </div>
  );
}

export default FormRow;
