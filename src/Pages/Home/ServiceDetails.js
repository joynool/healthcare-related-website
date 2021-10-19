import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

/*-----------------------------------------------------
            Single service details panel 
-------------------------------------------------------*/
const ServiceDetails = () =>
{
    const { id } = useParams();

    const singleService = useFetch();
    console.log(singleService);

    return (
        <div>
            <h3 className="text-center my-5">Service Number : {id}</h3>
        </div>
    );
};

export default ServiceDetails;