import timeTurner from '../../images/time-turners.gif';
import felicis from '../../images/felicis.jpg';
import recorder from '../../images/recorder.gif';
import map from '../../images/map.gif';
import invisibility from '../../images/invisibility.gif';
import objects from '../../images/objects.jpg';

const SevenQuestion = (props) => {
  return (
    <fieldset className='formHat__sevenQuestion'>
      <div className='formHat__sevenQuestion--fieldsetQuestion'>
        <img
          className='formHat__sevenQuestion--fieldsetQuestion__img'
          src={objects}
          alt='imagen de una hechizo leviosa'
        />
        <label htmlFor='object'>
          <p className='formHat__sevenQuestion--fieldsetQuestion__question'>
            ¿Qué objeto mágico desearías tener?
          </p>
        </label>
      </div>
      <div className='formHat__sevenQuestion--fieldsetInputs'>
        <label
          className='formHat__sevenQuestion--fieldsetInputs__label'
          htmlFor='objectTurner'
        >
          <input
            required=''
            className='formHat__sevenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='objectTurner'
            name='object'
            value='Giratiempos'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sevenQuestion--fieldsetInputs__label--img'
            src={timeTurner}
            alt='imagen de giratiempos'
            title='imagen de giratiempos'
          ></img>
          <p>Giratiempos</p>
        </label>
        <label
          className='formHat__sevenQuestion--fieldsetInputs__label'
          htmlFor='objectFelicis'
        >
          <input
            required=''
            className='formHat__sevenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='objectFelicis'
            name='object'
            value='Poción Felix Felicis'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sevenQuestion--fieldsetInputs__label--img'
            src={felicis}
            alt='imagen de poción Felix Felicis'
            title='imagen de poción Felix Felicis'
          ></img>
          <p>Poción Felix Felicis</p>
        </label>
        <label
          className='formHat__sevenQuestion--fieldsetInputs__label'
          htmlFor='objectRecorder'
        >
          <input
            required=''
            className='formHat__sevenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='objectRecorder'
            name='object'
            value='Recordadora'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sevenQuestion--fieldsetInputs__label--img'
            src={recorder}
            alt='imagen de recordadora'
            title='imagen de recordadora'
          ></img>
          <p>Recordadora</p>
        </label>
        <label
          className='formHat__sevenQuestion--fieldsetInputs__label'
          htmlFor='objectMap'
        >
          <input
            required=''
            className='formHat__sevenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='objectMap'
            name='object'
            value='Mapa del merodeador'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sevenQuestion--fieldsetInputs__label--img'
            src={map}
            alt='imagen de mapa del merodeador'
            title='imagen de mapa del merodeador'
          ></img>
          <p>Mapa del merodeador</p>
        </label>
        <label
          className='formHat__sevenQuestion--fieldsetInputs__label'
          htmlFor='objectInvisibility'
        >
          <input
            required=''
            className='formHat__sevenQuestion--fieldsetInputs__label--option'
            type='radio'
            id='objectInvisibility'
            name='object'
            value='Capa de invisibilidad'
            onChange={props.handleSweet}
          />
          <img
            className='formHat__sevenQuestion--fieldsetInputs__label--img'
            src={invisibility}
            alt='imagen de capa de invisibilidad'
            title='imagen de capa de invisibilidad'
          ></img>
          <p>Capa de invisibilidad </p>
        </label>
      </div>
      {/* <p className='formHat__sevenQuestion--response'>
        Tu respuesta seleccionada es: {props.object}
      </p> */}
    </fieldset>
  );
};
export default SevenQuestion;
