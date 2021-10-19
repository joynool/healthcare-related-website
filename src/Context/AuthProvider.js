import React, { createContext } from 'react';
import useFirebase from './../hooks/useFirebase';

/*-----------------------------------------------------
    Implement Context API to pass authentication data 
-------------------------------------------------------*/

export const AuthContext = createContext();

const AuthProvider = ({ children }) =>
{
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;