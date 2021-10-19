import { useEffect, useState } from "react";

/*-----------------------------------------------------
    Implement custom hook as useFetch() to fetch data
-------------------------------------------------------*/

const useFetch = () =>
{
    const [services, setServices] = useState([]);

    useEffect(() =>
    {
        fetch('./fitness.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return services;
};

export default useFetch;