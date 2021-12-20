import train from '../../images/train.png';
import broom from '../../images/broom.gif';
import car from '../../images/car.gif';
import thestral from '../../images/thestral.gif';
import flu from '../../images/flu.gif';
import hippogriff from '../../images/hippogriff.gif';

const TenQuestion = (props) => {
  return (
    <fieldset className='formHat__tenQuestion'>
      <div className='formHat__tenQuestion--fieldsetQuestion'>
        <img
          className='formHat__tenQuestion--fieldsetQuestion__img'
          src={train}
          alt='imagen de la estación 9 3/4'
        />
        <label htmlFor='transport'>
          <p className='formHat__tenQuestion--fieldsetQuestion__question'>
            ¿Qué medio de transporte preferirías usar?
          </p>
        </label>
      </div>
      <div className='formHat__tenQuestion--fieldsetInputs'>
        <label
          className='formHat__tenQuestion--fieldsetInputs__label'
          htmlFor='transportEscoba'
        >
          <input
            required=''
            className='formHat__tenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='transportEscoba'
            name='transport'
            value='Escoba'
            onChange={props.handleTransport}
          />
          <img
            className='formHat__tenQuestion--fieldsetInputs__label--img'
            src={broom}
            alt='imagen de Escoba'
            title='imagen de Escoba'
          ></img>
          <p>Escoba</p>
        </label>
        <label
          className='formHat__tenQuestion--fieldsetInputs__label'
          htmlFor='transportCar'
        >
          <input
            required=''
            className='formHat__tenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='transportCar'
            name='transport'
            value='Coche volador'
            onChange={props.handleTransport}
          />
          <img
            className='formHat__tenQuestion--fieldsetInputs__label--img'
            src={car}
            alt='imagen de Coche volador'
            title='imagen de Coche volador'
          ></img>
          <p>Coche volador</p>
        </label>
        <label
          className='formHat__tenQuestion--fieldsetInputs__label'
          htmlFor='transportThestral'
        >
          <input
            required=''
            className='formHat__tenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='transportThestral'
            name='transport'
            value='Thestral'
            onChange={props.handleTransport}
          />
          <img
            className='formHat__tenQuestion--fieldsetInputs__label--img'
            src={thestral}
            alt='imagen de Thestral'
            title='imagen de Thestral'
          ></img>
          <p>Thestral</p>
        </label>
        <label
          className='formHat__tenQuestion--fieldsetInputs__label'
          htmlFor='transportFlu'
        >
          <input
            required=''
            className='formHat__tenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='transportFlu'
            name='transport'
            value='Polvos Flu'
            onChange={props.handleTransport}
          />
          <img
            className='formHat__tenQuestion--fieldsetInputs__label--img'
            src={flu}
            alt='imagen de polvos Flu'
            title='imagen de polvos Flu'
          ></img>
          <p>Polvos Flu</p>
        </label>
        <label
          className='formHat__tenQuestion--fieldsetInputs__label'
          htmlFor='transportHippogriff'
        >
          <input
            required=''
            className='formHat__tenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='transportHippogriff'
            name='transport'
            value='Hipogrifo'
            onChange={props.handleTransport}
          />
          <img
            className='formHat__tenQuestion--fieldsetInputs__label--img'
            src={hippogriff}
            alt='imagen de un hipogrifo'
            title='imagen de un hipogrifo'
          ></img>
          <p>Hipogrifo </p>
        </label>
      </div>
      {/* <p className='formHat__tenQuestion--response'>
        Tu respuesta seleccionada es: {props.transport}
      </p> */}
    </fieldset>
  );
};
export default TenQuestion;
