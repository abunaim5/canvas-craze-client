import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <span>Loading.....</span>
    }

    if(user){
        return children
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;