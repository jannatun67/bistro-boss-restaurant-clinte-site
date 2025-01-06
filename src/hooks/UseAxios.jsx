import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

 const AxiosSecure= axios.create({
    baseURL:"http://localhost:5000"
})
const UseAxios = () => {
    const{logOut}= useContext(AuthContext)
    const navigate= useNavigate()
    AxiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access token")
        // console.log("request stop by interceptors", token);
        config.headers.authorization=`Bearer ${token}`;
        return config
    }),function (error){
        return Promise.reject(error)
    }

    // interceptors 401 and 403 status
    AxiosSecure.interceptors.response.use(function(response){
        return response
    },async (error) =>{
       const status=error.response.status;
        // console.log("status error in the interceptor", status);
        if (status ===401 || status === 403) {
            await logOut
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return AxiosSecure
};

export default UseAxios;