import '../../styles/layout/formHat.scss';
import shop from '../../images/sortilegios.jpg';
const ThirdQuestion = (props) => {
  return (
    <fieldset className='formHat__thirdQuestion'>
      <div className='formHat__thirdQuestion--fieldsetQuestion'>
        <img
          className='formHat__thirdQuestion--fieldsetQuestion__img'
          src={shop}
          alt='imagen de productos de sortilegios Weasley'
        />
        <label htmlFor='invention'>
          <p className='formHat__thirdQuestion--fieldsetQuestion__question'>
            ¿Cuál te parece el mejor invento de sortilegios Weasley?
          </p>
        </label>
      </div>
      <div className='formHat__thirdQuestion--fieldsetInputs'>
        <label
          className='formHat__thirdQuestion--fieldsetInputs__label'
          htmlFor='invention1'
        >
          <input
            className='formHat__thirdQuestion--fieldsetInputs__label--option'
            type='radio'
            id='invention1'
            name='invention'
            value='Turrón de hemorragia nasal'
            onChange={props.handleInvention}
          />{' '}
          Turrón de hemorragia nasal
        </label>
        <label
          className='formHat__thirdQuestion--fieldsetInputs__label'
          htmlFor='invention2'
        >
          <input
            className='formHat__thirdQuestion--fieldsetInputs__label--option'
            type='radio'
            id='invention2'
            name='invention'
            value='Orejas extensibles'
            onChange={props.handleInvention}
          />{' '}
          Orejas extensibles
        </label>
        <label
          className='formHat__thirdQuestion--fieldsetInputs__label'
          htmlFor='invention3'
        >
          <input
            className='formHat__thirdQuestion--fieldsetInputs__label--option'
            type='radio'
            id='invention3'
            name='invention'
            value='Pantano portátil'
            onChange={props.handleInvention}
          />{' '}
          Pantano portátil
        </label>
        <label
          className='formHat__thirdQuestion--fieldsetInputs__label'
          htmlFor='invention4'
        >
          <input
            className='formHat__thirdQuestion--fieldsetInputs__label--option'
            type='radio'
            id='invention4'
            name='invention'
            value='Filtro de amor'
            onChange={props.handleInvention}
          />{' '}
          Filtro de amor
        </label>
      </div>
      {/* <p className='formHat__thirdQuestion--response'>
        Tu respuesta seleccionada es: {props.invention}
      </p> */}
    </fieldset>
  );
};
export default ThirdQuestion;
