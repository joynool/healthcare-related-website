import { useEffect, useState } from "react";

/*-----------------------------------------------------
    Implement custom hook as useFetch() to fetch data
-------------------------------------------------------*/

const useFetch = () =>
{
    const [services, setServices] = useState([]);

    useEffect(() =>
    {
        fetch('fitness.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return services;
};

export default useFetch;