import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

/*-----------------------------------------------------
        Private Route panel for login validation
-------------------------------------------------------*/
const PrivateRoute = ({ children, ...rest }) =>
{
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center m-5">
            <Spinner animation="border" variant="success" />
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }} />
            }
        ></Route>
    );
};

export default PrivateRoute;