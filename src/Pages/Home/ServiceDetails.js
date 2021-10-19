import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

const ServiceDetails = () =>
{
    const { id } = useParams();

    const [desireService, setDesireService] = useState([]);

    const allServices = useFetch();

    useEffect(() =>
    {
        if (id) {
            const matchService = [];
            const findItem = allServices.find(service => service.id === id);
            matchService.push(findItem);
            setDesireService(matchService);
        }
    }, [id, allServices]);

    console.log(allServices, desireService);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='{findItem.package_img}' />
                <Card.Body>
                    <Card.Title>abc</Card.Title>
                    <Card.Text>
                        def
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;