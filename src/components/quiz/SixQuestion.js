import honeydukes from '../../images/honeydukes.jpg';
import pumpkin from '../../images/pumpkin.jpg';
import chocolate from '../../images/chocolate.jpg';
import gelatine from '../../images/gelatine.jpg';
import tablets from '../../images/tablets.jpg';

const SixQuestion = (props) => {
  return (
    <fieldset className='formHat__sixQuestion'>
      <div className='formHat__sixQuestion--fieldsetQuestion'>
        <img
          className='formHat__sixQuestion--fieldsetQuestion__img'
          src={honeydukes}
          alt='imagen de una hechizo leviosa'
        />
        <label htmlFor='sweet'>
          <p className='formHat__sixQuestion--fieldsetQuestion__question'>
            ¿Qué dulces de Honeydukes te mueres por probar?
          </p>
        </label>
      </div>
      <div className='formHat__sixQuestion--fieldsetInputs'>
        <label
          className='formHat__sixQuestion--fieldsetInputs__label'
          htmlFor='sweetPumpkin'
        >
          <input
            className='formHat__sixQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sweetPumpkin'
            name='sweet'
            value='Zumo de calabaza'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sixQuestion--fieldsetInputs__label--img'
            src={pumpkin}
            alt='imagen de Zumo de calabaza'
            title='imagen de Zumo de calabaza'
          ></img>
          <p>Zumo de calabaza</p>
        </label>
        <label
          className='formHat__sixQuestion--fieldsetInputs__label'
          htmlFor='sweetChocolate'
        >
          <input
            className='formHat__sixQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sweetChocolate'
            name='sweet'
            value='Ranas de chocolate'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sixQuestion--fieldsetInputs__label--img'
            src={chocolate}
            alt='imagen de ranas de chocolate'
            title='imagen de ranas de chocolate'
          ></img>
          <p>Ranas de chocolate</p>
        </label>
        <label
          className='formHat__sixQuestion--fieldsetInputs__label'
          htmlFor='sweetGelatine'
        >
          <input
            className='formHat__sixQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sweetGelatine'
            name='sweet'
            value='Babosas de gelatina'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sixQuestion--fieldsetInputs__label--img'
            src={gelatine}
            alt='imagen de Babosas de gelatina'
            title='imagen de Babosas de gelatina'
          ></img>
          <p>Babosas de gelatina</p>
        </label>
        <label
          className='formHat__sixQuestion--fieldsetInputs__label'
          htmlFor='sweetTablets'
        >
          <input
            className='formHat__sixQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sweetTablets'
            name='sweet'
            value='Grageas Bertie Bott'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sixQuestion--fieldsetInputs__label--img'
            src={tablets}
            alt='imagen de Grageas Bertie Bott'
            title='imagen de Grageas Bertie Bott'
          ></img>
          <p>Grageas Bertie Bott </p>
        </label>
      </div>
      <p className='formHat__sixQuestion--response'>
        Tu respuesta seleccionada es: {props.sweet}
      </p>
    </fieldset>
  );
};
export default SixQuestion;
