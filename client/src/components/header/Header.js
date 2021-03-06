import './Header.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { useState, useEffect } from 'react';

const Header = () => {
  
  return (
    <Navbar bg='custom' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand>Digitalibrary</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink to='/lib'>Home</NavLink>
            <NavLink to='/search'>Search</NavLink>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2'/>
            <Button variant='outline-warning'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;