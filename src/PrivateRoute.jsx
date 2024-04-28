import React, { useContext } from 'react';
import { AuthContext } from './firebase/Authentication';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>
    }

    if(user) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}/>

};

export default PrivateRoute;