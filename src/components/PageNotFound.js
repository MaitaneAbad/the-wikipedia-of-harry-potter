import { Link } from 'react-router-dom';
import '../styles/layout/pageNotFound.scss';
import owl from '../images/owl.png';
const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <p className='pageNotFound__paragraph'>
        Oscuros y difíciles tiempos nos aguardan. Pronto todos tendremos que
        elegir entre lo que es correcto y lo que es fácil
      </p>
      <Link to='/'>
        <p className='pageNotFound__back'>
          <img
            className='pageNotFound__back--img'
            src={owl}
            title='Ayudate de Hedwig para volver a la página principal'
            alt='Ayudate de Hedwig para volver a la página principal'
          />
          Ayudate de Hedwig para volver a la página principal.
        </p>
      </Link>
    </div>
  );
};
export default PageNotFound;
