import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*-----------------------------------------------------
            implement all service grid card panel 
-------------------------------------------------------*/
const Service = (props) =>
{
    const { id, package_name, package_img, entry, charge, description } = props.service;
    return (
        <Col>
            <Card className=" text-center p-1 shadow-sm">
                <Card.Img variant="top" src={package_img} className="img-thumbnail p-2" />
                <Card.Body>
                    <Card.Title>{package_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted my-3">
                        {charge}
                        <br />
                        <small className="text-dark">Time: 6AM TO MIDNIGHT 12AM (Any Time access)</small>
                    </Card.Subtitle>
                    <Card.Text>Facility: {description}</Card.Text>
                    <Link to={`/service-details/${id}`}>
                        <Button variant="outline-secondary">More About Service</Button>
                    </Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{entry} Only (Yearly Charged)</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;