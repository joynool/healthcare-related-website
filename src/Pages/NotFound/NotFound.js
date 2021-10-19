import React from 'react';
import notFoundImg from './../../images/404.svg';

const NotFound = () =>
{
    return (
        <div className="m-1 mx-auto w-75">
            <img src={notFoundImg} alt="page not found" className="img-fluid img-thumbnail" />
        </div>
    );
};

export default NotFound;