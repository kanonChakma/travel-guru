import React, { useContext } from 'react';
import './Header.css'
import logo from '../../Image/Logo.png'
import './Header.css'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
  const[signInUser,setSignInUser]=useContext(userContext)
  const location=useLocation();
  let condition=location.pathname==="/" ||location.pathname.includes("booking")||location.pathname.includes("home");
  
  return (
   <Navbar  bg="" variant="" className="nav-bar position-fixed fixed-top">
    <Navbar.Brand>
      <img
        alt=""
        src={logo}
        height="50"
        className={`${condition&&"logo-white"}`}
      />{' '}
    
  </Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-info">Search</Button>
    </Form>
     <Nav className="mr-auto">
        <Nav.Link><Link  className={`${condition &&"Linker"}`} to="/home">Home</Link></Nav.Link>
        <Nav.Link><Link className={`${condition &&"Linker"}`} to="/features">Destination</Link></Nav.Link>
        <Nav.Link ><Link className={`${condition &&"Linker"}`} to="/blog">Blog</Link></Nav.Link>
        <Nav.Link ><Link className={`${condition &&"Linker"}`} to="/login">contact</Link></Nav.Link>
        <Nav.Link ><Link className={`${condition &&"Linker"}`} to="/login"><Button variant="warning" size="sm">Login</Button></Link></Nav.Link>
        {signInUser.name && <Nav.Link className="Linker username" href="#pricing">{signInUser.name}</Nav.Link>}
    </Nav>
  </Navbar>
  );
};
export default Header;

