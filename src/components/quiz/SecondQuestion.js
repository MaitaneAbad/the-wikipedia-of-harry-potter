import session from '../../images/class.gif';
import defence from '../../images/defence.gif';
import herbology from '../../images/herbology.gif';
import divination from '../../images/divination.gif';
import magicalCriatures from '../../images/magicalCreatures.gif';
import potions from '../../images/potions.gif';
const SecondQuestion = (props) => {
  // Creamos la función manejadora

  return (
    <fieldset className='formHat__secondQuestion'>
      {/* <p className='formHat__secondQuestion--number'>2ª</p> */}
      <div className='formHat__secondQuestion--fieldsetQuestion'>
        <img
          className='formHat__secondQuestion--fieldsetQuestion__img'
          src={session}
          alt='imagen de una clase de howarts'
        />
        <label htmlFor='session'>
          <p className='formHat__secondQuestion--fieldsetQuestion__question'>
            ¿Cuál sería tu clase favorita?
          </p>
        </label>
      </div>
      <div className='formHat__secondQuestion--fieldsetInputs'>
        <label
          className='formHat__secondQuestion--fieldsetInputs__label'
          htmlFor='sessionDefence'
        >
          <input
            className='formHat__secondQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sessionDefence'
            name='session'
            value='defensa contra las artes oscuras'
            onChange={props.handleclassroom}
          />
          <img
            className='formHat__secondQuestion--fieldsetInputs__label--img'
            src={defence}
            alt='imagen de defensa contras las artes oscuras'
            title='imagen de de defensa contras las artes oscuras'
          ></img>
          <p>defensa contra las artes oscuras</p>
        </label>
        <label
          className='formHat__secondQuestion--fieldsetInputs__label'
          htmlFor='sessionPotions'
        >
          <input
            className='formHat__secondQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sessionPotions'
            name='session'
            value='pociones'
            onChange={props.handleclassroom}
          />
          <img
            className='formHat__secondQuestion--fieldsetInputs__label--img'
            src={potions}
            alt='imagen de pociones'
            title='imagen de pociones'
          ></img>
          <p>Pociones</p>
        </label>{' '}
        <label
          className='formHat__secondQuestion--fieldsetInputs__label'
          htmlFor='sessionMagicalCreatures'
        >
          <input
            className='formHat__secondQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sessionMagicalCreatures'
            name='session'
            value='cuidado de criaturas mágicas'
            onChange={props.handleclassroom}
          />
          <img
            className='formHat__secondQuestion--fieldsetInputs__label--img'
            src={magicalCriatures}
            alt='imagen de cuidado de criaturas mágicas'
            title='imagen de cuidado de criaturas mágicas'
          ></img>
          <p>Cuidado de criaturas mágicas</p>
        </label>{' '}
        <label
          className='formHat__secondQuestion--fieldsetInputs__label'
          htmlFor='sessionHerbology'
        >
          <input
            className='formHat__secondQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sessionHerbology'
            name='session'
            value='herbología'
            onChange={props.handleclassroom}
          />
          <img
            className='formHat__secondQuestion--fieldsetInputs__label--img'
            src={herbology}
            alt='imagen de herbología'
            title='imagen de herbología'
          ></img>{' '}
          <p>Herbología</p>
        </label>{' '}
        <label
          className='formHat__secondQuestion--fieldsetInputs__label'
          htmlFor='sessionDivination'
        >
          <input
            className='formHat__secondQuestion--fieldsetInputs__label--option'
            type='radio'
            id='sessionDivination'
            name='session'
            value='adivinación'
            onChange={props.handleclassroom}
          />
          <img
            className='formHat__secondQuestion--fieldsetInputs__label--img'
            src={divination}
            alt='imagen de adivinación'
            title='imagen de adivinación'
          ></img>
          <p>Adivinación</p>
        </label>
      </div>
      <p className='formHat__secondQuestion--response'>
        Tu respuesta seleccionada es: {props.classroom}
      </p>
    </fieldset>
  );
};
export default SecondQuestion;
