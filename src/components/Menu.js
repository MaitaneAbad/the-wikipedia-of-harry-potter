import MenuButton from './MenuButton';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

import '../styles/layout/menu.scss';
const Menu = ({ open, handleClick }) => {
  const NavbarWrapper = styled.nav`
    right: ${(props) => (props.open ? '0' : '-100%')};
  `;
  return (
    <NavbarWrapper className='menu' open={open}>
      <MenuButton open={open} handleClick={handleClick} />
      <Link to='/'>
        <p className='menu__home' onClick={handleClick}>
          Inicio
        </p>
      </Link>
      <Link to='/quiz'>
        <p className='menu__howarts' onClick={handleClick}>
          ¿Cuál es tu casa de howarts?
        </p>
      </Link>
      <a
        onClick={handleClick}
        href='https://maitaneabad.github.io/portfolio/portfolio.html'
        target='_blank'
        rel='noreferrer'
        className='menu__link'
      >
        ¿Quieres conocer a la autora?
      </a>
    </NavbarWrapper>
  );
};
export default Menu;
