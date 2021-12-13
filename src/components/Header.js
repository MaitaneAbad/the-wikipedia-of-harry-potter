import logo from '../images/logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/layout/header.scss';
const Header = () => {
  return (
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
  );
};
export default Header;
