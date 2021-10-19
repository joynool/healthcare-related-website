import initializeAuthentication from './../Pages/Auth/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    const auth = getAuth();

    const createNewUser = (name, email, pass) =>
    {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const processLogin = (email, pass) =>
    {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
            .then(result => { })
            .catch(error => { setMessage(error.message) })
    }

    const setUserName = name =>
    {
        setIsLoading(true)
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .finally(() => setIsLoading(false));
    }

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
    }, [auth]);

    const logOut = () =>
    {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    return { user, isLoading, message, setMessage, createNewUser, processLogin, setUserName, setIsLoading, loginUsingGoogle, logOut };
};

export default useFirebase;