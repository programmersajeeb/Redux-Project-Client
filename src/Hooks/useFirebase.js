import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,  onAuthStateChanged} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setisLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    // observe user state, nothing to do this function just declare it for better performance
    useEffect(() => {
        // setisLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            } setisLoading(false)

            return () => unsubscribe;
        });
    }, [])

    const logOut = () => {
        setisLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // 
        }).finally(
            () => setisLoading(false)
        );
    }

    return {
        user,
        logOut,
        isLoading,
        signInUsingGoogle,
    };
};

export default useFirebase;