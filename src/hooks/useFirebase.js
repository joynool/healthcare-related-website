import initializeAuthentication from './../Pages/Auth/Firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const loginUsingGoogle = () =>
    {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(() =>
    {
        const unsubscribed = onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            };
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () =>
    {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    return { user, isLoading, setIsLoading, loginUsingGoogle, logOut };
};

export default useFirebase;