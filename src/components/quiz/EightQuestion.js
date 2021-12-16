import hermione from '../../images/hermione.gif';
import albus from '../../images/albus.gif';
import sirius from '../../images/sirius.gif';
import severus from '../../images/severus.gif';
import minerva from '../../images/minerva.gif';
import image from '../../images/image.jpg';

const EightQuestion = (props) => {
  return (
    <fieldset className='formHat__eightQuestion'>
      <div className='formHat__eightQuestion--fieldsetQuestion'>
        <img
          className='formHat__eightQuestion--fieldsetQuestion__img'
          src={image}
          alt='imagen de una hechizo leviosa'
        />
        <label htmlFor='protect'>
          <p className='formHat__eightQuestion--fieldsetQuestion__question'>
            ¿Qué personaje mágico desearías ser?
          </p>
        </label>
      </div>
      <div className='formHat__eightQuestion--fieldsetInputs'>
        <label
          className='formHat__eightQuestion--fieldsetInputs__label'
          htmlFor='protectHermione'
        >
          <input
            className='formHat__eightQuestion--fieldsetInputs__label--option'
            type='radio'
            id='protectHermione'
            name='protect'
            value='Hermione'
            onChange={props.handleProtect}
          />
          <img
            className='formHat__eightQuestion--fieldsetInputs__label--img'
            src={hermione}
            alt='imagen de Hermione'
            title='imagen de Hermione'
          ></img>
          <p>Hermione</p>
        </label>
        <label
          className='formHat__eightQuestion--fieldsetInputs__label'
          htmlFor='protectAlbus'
        >
          <input
            className='formHat__eightQuestion--fieldsetInputs__label--option'
            type='radio'
            id='protectAlbus'
            name='protect'
            value='Dumbledore'
            onChange={props.handleProtect}
          />
          <img
            className='formHat__eightQuestion--fieldsetInputs__label--img'
            src={albus}
            alt='imagen de Dumbledore'
            title='imagen de Dumbledore'
          ></img>
          <p>Dumbledore</p>
        </label>
        <label
          className='formHat__eightQuestion--fieldsetInputs__label'
          htmlFor='protectSirius'
        >
          <input
            className='formHat__eightQuestion--fieldsetInputs__label--option'
            type='radio'
            id='protectSirius'
            name='protect'
            value='Sirius'
            onChange={props.handleProtect}
          />
          <img
            className='formHat__eightQuestion--fieldsetInputs__label--img'
            src={sirius}
            alt='imagen de Sirius'
            title='imagen de Sirius'
          ></img>
          <p>Sirius</p>
        </label>
        <label
          className='formHat__eightQuestion--fieldsetInputs__label'
          htmlFor='protectSnape'
        >
          <input
            className='formHat__eightQuestion--fieldsetInputs__label--option'
            type='radio'
            id='protectSnape'
            name='protect'
            value='Snape'
            onChange={props.handleProtect}
          />
          <img
            className='formHat__eightQuestion--fieldsetInputs__label--img'
            src={severus}
            alt='imagen de Snape'
            title='imagen de Snape'
          ></img>
          <p>Snape</p>
        </label>
        <label
          className='formHat__eightQuestion--fieldsetInputs__label'
          htmlFor='protectMcgonagall'
        >
          <input
            className='formHat__eightQuestion--fieldsetInputs__label--option'
            type='radio'
            id='protectMcgonagall'
            name='protect'
            value='McGonagall'
            onChange={props.handleProtect}
          />
          <img
            className='formHat__eightQuestion--fieldsetInputs__label--img'
            src={minerva}
            alt='imagen de McGonagall'
            title='imagen de McGonagall'
          ></img>
          <p>McGonagall </p>
        </label>
      </div>
      {/* <p className='formHat__eightQuestion--response'>
        Tu respuesta seleccionada es: {props.protect}
      </p> */}
    </fieldset>
  );
};
export default EightQuestion;
