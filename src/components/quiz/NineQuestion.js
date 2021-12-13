import houses from '../../images/houses.png';
const NineQuestion = (props) => {
  return (
    <fieldset className='formHat__nineQuestion'>
      <div className='formHat__nineQuestion--fieldsetQuestion'>
        <img
          className='formHat__nineQuestion--fieldsetQuestion__img'
          src={houses}
          alt='imagen de productos de sortilegios Weasley'
        />
        <label htmlFor='qualitie'>
          <p className='formHat__nineQuestion--fieldsetQuestion__question'>
            ¿Qué cualidad valoras más?
          </p>
        </label>
      </div>
      <div className='formHat__nineQuestion--fieldsetInputs'>
        <label
          className='formHat__nineQuestion--fieldsetInputs__label'
          htmlFor='qualitie1'
        >
          <input
            className='formHat__nineQuestion--fieldsetInputs__label--option'
            type='radio'
            id='qualitie1'
            name='qualitie'
            value='Ambición, astucia y determinación'
            onChange={props.handleQualities}
          />{' '}
          Ambición, astucia y determinación
        </label>
        <label
          className='formHat__nineQuestion--fieldsetInputs__label'
          htmlFor='qualitie2'
        >
          <input
            className='formHat__nineQuestion--fieldsetInputs__label--option'
            type='radio'
            id='qualitie2'
            name='qualitie'
            value='Osadía, valentía y lealtad'
            onChange={props.handleQualities}
          />{' '}
          Osadía, valentía y lealtad
        </label>
        <label
          className='formHat__nineQuestion--fieldsetInputs__label'
          htmlFor='qualitie3'
        >
          <input
            className='formHat__nineQuestion--fieldsetInputs__label--option'
            type='radio'
            id='qualitie3'
            name='qualitie'
            value='Originalidad, ingenio e inteligencia'
            onChange={props.handleQualities}
          />{' '}
          Originalidad, ingenio e inteligencia
        </label>
        <label
          className='formHat__nineQuestion--fieldsetInputs__label'
          htmlFor='qualitie4'
        >
          <input
            className='formHat__nineQuestion--fieldsetInputs__label--option'
            type='radio'
            id='qualitie4'
            name='qualitie'
            value='  Honestidad, trabajo duro y paciencia'
            onChange={props.handleQualities}
          />{' '}
          Honestidad, trabajo duro y paciencia
        </label>
      </div>
      {/* <p className='formHat__nineQuestion--response'>
        Tu respuesta seleccionada es: {props.qualitie}
      </p> */}
    </fieldset>
  );
};
export default NineQuestion;
