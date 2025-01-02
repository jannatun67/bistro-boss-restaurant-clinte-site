import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const{user,loading,location}=useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivetRoute;