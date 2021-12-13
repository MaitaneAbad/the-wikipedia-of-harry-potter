import owl from '../../images/owl.jpg';
import rat from '../../images/rat.jpg';
import toad from '../../images/toad.jpg';
import cat from '../../images/cat.jpg';
import img from '../../images/admitido.gif';
const FirstQuestion = (props) => {
  return (
    <fieldset className='formHat__firstQuestion'>
      {/* <p className='formHat__firstQuestion--number'>1ª</p> */}
      <div className='formHat__firstQuestion--fieldsetQuestion'>
        <img
          className='formHat__firstQuestion--fieldsetQuestion__img'
          src={img}
          alt='imagen de Harry potter recibiendo el buzón'
        />
        <label htmlFor='pet'>
          <p className='formHat__firstQuestion--fieldsetQuestion__question'>
            Si fueras admitido en Howarts... ¿Que mascota elegirias?
          </p>
        </label>
      </div>
      <div className='formHat__firstQuestion--fieldsetInputs'>
        <label
          className='formHat__firstQuestion--fieldsetInputs__label'
          htmlFor='owl'
        >
          <input
            className='formHat__firstQuestion--fieldsetInputs__label--option'
            type='radio'
            id='owl'
            name='pet'
            value='lechuza'
            onChange={props.handlePet}
          />
          <img
            className='formHat__firstQuestion--fieldsetInputs__label--img'
            src={owl}
            alt='imagen de una lechuza'
            title='imagen de una lechuza'
          ></img>
        </label>
        <label
          className='formHat__firstQuestion--fieldsetInputs__label'
          htmlFor='rat'
        >
          <input
            className='formHat__firstQuestion--fieldsetInputs__label--option'
            type='radio'
            id='rat'
            name='pet'
            value='rata'
            onChange={props.handlePet}
          />
          <img
            className='formHat__firstQuestion--fieldsetInputs__label--img'
            src={rat}
            alt='imagen de una rata'
            title='imagen de una rata'
          ></img>
        </label>
        <label
          className='formHat__firstQuestion--fieldsetInputs__label'
          htmlFor='toad'
        >
          <input
            className='formHat__firstQuestion--fieldsetInputs__label--option'
            type='radio'
            id='toad'
            name='pet'
            value='sapo'
            onChange={props.handlePet}
          />
          <img
            className='formHat__firstQuestion--fieldsetInputs__label--img'
            src={toad}
            alt='imagen de una sapo'
            title='imagen de una sapo'
          ></img>
        </label>{' '}
        <label
          className='formHat__firstQuestion--fieldsetInputs__label'
          htmlFor='cat'
        >
          <input
            className='formHat__firstQuestion--fieldsetInputs__label--option'
            type='radio'
            id='cat'
            name='pet'
            value='gato'
            onChange={props.handlePet}
          />
          <img
            className='formHat__firstQuestion--fieldsetInputs__label--img'
            src={cat}
            alt='imagen de una cat'
            title='imagen de una cat'
          ></img>
        </label>
      </div>
      {/* <p className='formHat__firstQuestion--response'>
        {' '}
        Tu respues seleccionada es: {props.pet}
      </p> */}
    </fieldset>
  );
};
export default FirstQuestion;
