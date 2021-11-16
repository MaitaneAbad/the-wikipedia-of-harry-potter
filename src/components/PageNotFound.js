import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='titlePageNotFound'>
      <p>Página no encontrada. Vuelve por el portal</p>

      <Link to='/'></Link>
    </div>
  );
};
export default NotFoundPage;
