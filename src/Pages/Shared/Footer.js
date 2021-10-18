import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () =>
{
    return (
        <div className="bg-secondary d-lg-flex justify-content-lg-around p-3">
            <div>
                <h3 className="text-light fw-light ms-2">Create Your Body at Fitness Club</h3>
                <Nav className="justify-content-center">
                    <Nav.Link as={HashLink} to="/home" className="text-light border-end border-2 m-0 p-0"><span className="mx-2">Home</span></Nav.Link>
                    <Nav.Link as={HashLink} to="/services" className="text-light border-end border-2 m-0 p-0"><span className="mx-2">Services</span></Nav.Link>
                    <Nav.Link as={HashLink} to="/about" className="text-light m-0 p-0"><span className="mx-2">About Us</span></Nav.Link>
                </Nav>
            </div>
            <div className="my-4 my-lg-0">
                <h4 className="text-center text-light fw-light">Follow us on Social Media</h4>
                <Nav className="justify-content-center">
                    <Nav.Link href="/home" className="text-light">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Nav.Link>
                    <Nav.Link href="/home" className="text-light">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Nav.Link>
                    <Nav.Link href="/home" className="text-light">
                        <FontAwesomeIcon icon={faGoogle} />
                    </Nav.Link>
                    <Nav.Link href="/home" className="text-light">
                        <FontAwesomeIcon icon={faApple} />
                    </Nav.Link>
                </Nav>
            </div>
            <h3 className="my-auto text-center text-light fw-light fs-5">&copy; 2021 Fitness Club</h3>
        </div>
    );
};

export default Footer;