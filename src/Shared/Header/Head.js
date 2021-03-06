import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useContextBase from '../../pages/hooks/useContextbase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const {user,logOut} =useContextBase();
    return (
        <div>
            <Navbar className="navbar" bg="success" variant="dark" fixed="top" collapseOnSelect expand="lg">
    <Container  className="">
    <Navbar.Brand  className="text-light fw-bold brand" href="/home#home">Crazy <span className="text-dark">Bikers</span>  Store</Navbar.Brand>
    <Image className="ms-3 navImg" style={{width:50}} src={logo} />
    
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link  className="text-dark fw-bold link" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link  className="text-dark fw-bold link" as={HashLink} to="/home#products">Products</Nav.Link>
      <Nav.Link  className="text-dark fw-bold link" as={HashLink} to="/moreproducts">More Products</Nav.Link>
      {
        user?.email && <Nav.Link  className="text-dark fw-bold link" as={Link} to="/dashboard">My DashBoard</Nav.Link>
      }

 {
   user.email ? 
   <Navbar.Text>
     
     <button onClick={logOut} className="btn btn-primary">Log Out</button>
     
     <Image className="ms-3" style={{width:30}} src={user.photoURL} roundedCircle />
   </Navbar.Text>
   
   :
   <Nav.Link className="btn btn-primary text-light" as={Link} to="/login">Login</Nav.Link>
 }
 {
   user?.email &&  <Navbar.Text className="ms-3 text-dark fw-bold" >{user.displayName}</Navbar.Text>
 }
      
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;