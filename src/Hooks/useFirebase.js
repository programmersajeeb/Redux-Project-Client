import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = ()=>{
    const [users, setUsers] = useState({});
    const [isLoading, setisLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoole =()=>{
        setisLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.user);
        })
    }

    //Observe user state change
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUsers(user);
            }else{
                setUsers({});
            }setisLoading(false)
            return ()=> unsubscribed;
        });
        
    }, [])
    const logOut=()=>{
        setisLoading(true);
        signOut(auth)
        .then(()=>{});
    }
    return{
        users,
        signInUsingGoole,
        logOut,
        isLoading
    }
}

export default useFirebase;