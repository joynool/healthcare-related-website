import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

/*-----------------------------------------------------
            Single service details panel 
-------------------------------------------------------*/
const ServiceDetails = () =>
{
    const { id } = useParams();

    const allService = useFetch();
    const matchService = [];
    const singleService = allService.find(val => val.id === parseInt(id));
    if (singleService) {
        matchService.push(singleService)
    }

    return (
        <div className="w-75 mx-auto my-5">
            {
                matchService.map(val => <div key={val.id}>
                    <Card className=" text-center p-1 shadow-sm">
                        <Card.Body>
                            <Card.Title>{val.package_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted my-3">
                                {val.charge}
                                <br />
                                <small className="text-dark">Time: 6AM TO MIDNIGHT 12AM (Any Time access)</small>
                            </Card.Subtitle>
                            <Card.Text>Facility: {val.description}</Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={val.package_img} className="img-thumbnail p-2" />
                        <Card.Footer>
                            <small className="text-muted">{val.entry} Only (Yearly Charged)</small>
                        </Card.Footer>
                    </Card>
                </div>
                )
            }
        </div>
    );
};

export default ServiceDetails;