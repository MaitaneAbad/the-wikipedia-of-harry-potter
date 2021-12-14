import logo from '../images/logo.png';
import { useState } from 'react';
import '../styles/layout/header.scss';
import Menu from './Menu';
import MenuButton from './MenuButton';
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className='header'>
      <MenuButton open={open} handleClick={handleClick} />
      <Menu open={open} handleClick={handleClick} />
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
