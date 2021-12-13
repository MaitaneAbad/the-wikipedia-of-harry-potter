import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/layout/menu.scss';
const Menu = () => {
  return (
    <>
      <div className='menu'>
        <Link to='/'>
          <p className='menu__home'>Inicio</p>
        </Link>
        <Link to='/quiz'>
          <p className='menu__howarts'>¿Cuál es tu casa de howarts?</p>
        </Link>
        <nav className='menu__contact'>
          <a
            href='https://maitaneabad.github.io/portfolio/portfolio.html'
            target='_blank'
            rel='noreferrer'
            className='menu__contact--link'
          >
            ¿Quieres conocer a la autora?
          </a>
        </nav>
      </div>
    </>
  );
};
export default Menu;
