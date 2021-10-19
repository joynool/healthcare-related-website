import React from 'react';
import { useParams } from 'react-router';

/*-----------------------------------------------------
            Single service details panel 
-------------------------------------------------------*/
const ServiceDetails = () =>
{
    const { id } = useParams();

    return (
        <div>
            <h3>Service Number : {id}</h3>
        </div>
    );
};

export default ServiceDetails;