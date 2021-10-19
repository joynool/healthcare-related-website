import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import servicesImg from './../../images/services.png';
import Service from './Service';

const Services = () =>
{
    const [services, setServices] = useState([]);

    useEffect(() =>
    {
        fetch('fitness.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <>
            <div id="services" className="bg-dark d-lg-flex justify-content-center pt-5">
                <div className="text-light p-5">
                    <h2 className="fw-light">EXERCISE REGULARLY STAY HEALTHY</h2>
                    <ul className="fw-light fs-5">
                        <li className="my-3">Increase energy level</li>
                        <li className="my-3">Reduce chronic diseases</li>
                        <li className="my-3">Delay sign of ageing</li>
                        <li className="my-3">Relax & sleep better</li>
                        <li className="my-3">Reduce anxiety</li>
                        <li className="my-3">Loose weight & look fit</li>
                    </ul>
                </div>
                <div>
                    <img src={servicesImg} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="container p-3">
                <h1 className="fw-light text-primary text-center m-3">- Our Services -</h1>
                <Row xs={1} md={2} className="g-3">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.id}
                        />)
                    }
                </Row>
            </div>
        </>

    );
};

export default Services;