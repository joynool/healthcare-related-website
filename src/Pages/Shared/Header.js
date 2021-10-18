import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../images/fitness-club-logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../hooks/useAuth';

const Header = () =>
{
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/home">
                    <img src={logo} alt="Fitness Club Logo" width="120px" height="100px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={HashLink} to="/home" className="fs-4 fw-normal me-2">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services#services" className="fs-4 fw-normal me-2">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/try-us-for-free" className="fs-4 fw-normal me-2">Try Us For <span className="text-danger fw-bold">FREE</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/about" className="fs-4 fw-normal">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    {
                        user.email && <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>
                    }
                    {
                        user.email ?
                            <Button onClick={logOut} variant="success" className="ms-2">Log Out</Button>
                            :
                            <Nav.Link as={HashLink} to="/login">
                                <Button variant="outline-success" className="ms-2">Log In</Button>
                            </Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;