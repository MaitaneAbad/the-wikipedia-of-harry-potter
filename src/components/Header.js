import logo from '../images/logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/layout/header.scss';
const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          {' '}
          <img
            className='header__container--img'
            src={logo}
            alt='Logo'
            title='La wiki de Harry Potter'
          />
        </div>
      </header>
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
export default Header;
