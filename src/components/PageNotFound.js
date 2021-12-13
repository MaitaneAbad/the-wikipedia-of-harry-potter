import { Link } from 'react-router-dom';
import '../styles/layout/pageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <p>Página no encontrada. Vuelve por el portal</p>

      <Link to='/'></Link>
    </div>
  );
};
export default PageNotFound;
