import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    // console.log(user);
    if(loader){
        return <div className="radial-progress" style={{"--value":100}}>100%</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/signin" state={{from : location
    }} replace></Navigate>;
};

export default PrivateRouter;