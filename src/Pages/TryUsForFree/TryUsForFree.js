import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import background from './../../images/TryUsForFree.jpg';

/*-----------------------------------------------------
            Offer components panel
-------------------------------------------------------*/
const TryUsForFree = () =>
{
    return (
        <div style={{
            backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', widows: '1300px', height: '900px',
        }}>
            <div style={{ position: 'relative', top: '350px' }}>
                <Row className="container w-75 g-2 mx-auto">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Select Your Schedule">
                            <Form.Select aria-label="Floating label select example">
                                <option>Friday (random shift)</option>
                                <option value="1">Morning</option>
                                <option value="2">After Noon</option>
                                <option value="3">Evening</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Button variant="dark"><span className="fs-5">Get your Free 1-Day Pass</span></Button>
                </Row>
            </div>
        </div>
    );
};

export default TryUsForFree;