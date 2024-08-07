import React from 'react';
import styled from 'styled-components';
import '../App.css';

const HeaderWrapper = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  img {
    width: 25px;
    height: 25px;
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  li {
    cursor: pointer;
    list-style: none;
  }
`;

const Button = styled.button`
  background-color: #101828;
  color: #ffffff;
  border-radius: 47px;
  font-size: 16px;
  height: 45px;
  width: 137px;
  border: none;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <HeaderWrapper className='navbar'>
      <Logo className='logo'>
        <img src='./Image/logo.png' id='navImg' alt='Logo' />
        <div>agon</div>
      </Logo>
      <Nav>
        <div className='list'>
          <span style={{ color: '#2c7d29' }}>Home</span>
          <span>About</span>
          <span>Company</span>
          <span>Pages</span>
          <span>Blog</span>
          <span>Shop</span>
        </div>
      </Nav>
      <Button id='navBtn'>Get Started</Button>
    </HeaderWrapper>
  );
};

export default Navbar;
