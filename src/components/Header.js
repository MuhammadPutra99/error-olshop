import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar bg='primary' expand='lg'>
      <LinkContainer to='/'>
        <Navbar.Brand className='text-white'>Putra Store</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to='/'>
            <Nav.Link className='text-white'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/cart'>
            <Nav.Link className='text-white'>Cart</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;