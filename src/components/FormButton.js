import { Link } from 'react-router-dom';
import hat from '../images/hat.png';
import '../styles/layout/formButton.scss';
const FormButton = (props) => {
  return (
    <>
      <div className='quiz'>
        {' '}
        <p className='quiz__title'>¿Quieres conocer de qué casa eres?</p>
        <p className='quiz__subtitle'> ¡Pues pincha en el sombrero!</p>
      </div>
      <form className='quiz__formButton'>
        <Link to={'/quiz/'}>
          <input
            className='quiz__formButton--input'
            type='button'
            value='Quiz'
          />
          <img
            className='quiz__formButton--img'
            src={hat}
            alt='cuestionario del sombrero seleccionador'
            title='cuestionario del sombrero seleccionador'
          />
        </Link>
      </form>
    </>
  );
};
export default FormButton;
