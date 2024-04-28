import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';

export const AuthContext = createContext()


const Authentication = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userLoginInfo, setUserLoginInfo] = useState(null)
    const [spot, setSpot] = useState(null)

    // create User
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logOut User 
    const logOut = () => {
        return signOut(auth)
    }

    // get the currently signed in use 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        }) 

        const storedUser = JSON.parse(localStorage.getItem('userLoginInfo'));
        if (storedUser) {
            setUserLoginInfo(storedUser);
            // setLoading(false);
        }

        return () => {
            unSubscribe()
        }
    }, [])


    
    useEffect(() => {
        localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo));
    }, [userLoginInfo]); 

    

    const userInfo = {register, login, logOut, googleLogin, user,setLoading, loading, userLoginInfo, setUserLoginInfo, spot, setSpot}

    

    return (
        <>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default Authentication;