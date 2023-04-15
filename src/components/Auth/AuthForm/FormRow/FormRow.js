
import './FormRow.css';

function FormRow({ data = { title: 'Пароль', error: '', name: 'pass' } }) {

  return (
    <div className="row">
      <p className='row__title'>{data.name}</p>
      <input className={`row__input ${data.error !== '' && 'row__input_error'}`} name={data.name} />
      {data.error !== '' &&
        <span className='row__error'>{data.error}</span>}
    </div>
  );
}

export default FormRow;
