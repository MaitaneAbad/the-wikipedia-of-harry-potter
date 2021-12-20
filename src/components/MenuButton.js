import '../styles/layout/menuButton.scss';
import React from 'react';
import styled from 'styled-components';

const MenuButtonWrapper = styled.button`
  border: none;
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper className='header__menuButton' onClick={handleClick}>
      <i class='fas fa-bars header__menuButton--bars'></i>
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper className='header__menuButtonExit' onClick={handleClick}>
      <i class='fas fa-times'></i>
    </MenuButtonWrapper>
  );
}

export default MenuButton;
