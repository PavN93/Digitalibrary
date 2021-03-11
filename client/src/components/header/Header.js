import './Header.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import SiteContext from '../../siteContext/SiteContext';

const Header = () => {

  const { setInputValue, handleFetchGoogleApi } = useContext(SiteContext);
  const location = useHistory();
  
  const OnType = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleFetchGoogleApi();
      location.push('/search');
    } else {
      setInputValue(event.target.value);
    }
  }

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
            <FormControl type='text' placeholder='Search' className='mr-sm-2' onKeyDown={OnType}/>
            <Button variant='outline-warning' onClick={handleFetchGoogleApi}><Link to='/search'>Search</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;