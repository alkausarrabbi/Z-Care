import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
import icon from "../../../../images/logo.png"
import { Link } from 'react-router-dom';
// import Button from '@restart/ui/esm/Button';
import useAuth from '../../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } =useAuth();
    console.log(user);
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
          alt=""
          src={icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     Z-CARE
      </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={HashLink} className="text-light" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-light" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="text-light" to="/home#review">Reviews</Nav.Link>
                        <Nav.Link as={HashLink} className="text-light" to="/home#branch">Branches</Nav.Link>
                        <Nav.Link as={HashLink} className="text-light" to="/doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={HashLink} className="text-light" to="/about">About Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} className="btn btn-danger m-3" variant="light">Logout</Button> :
                            <Nav.Link as={Link} className="text-light" to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                             <a href="#login">{user?.email}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    
    );
};

export default Header;