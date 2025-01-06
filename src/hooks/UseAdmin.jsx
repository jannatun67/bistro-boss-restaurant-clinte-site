import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxios from "./UseAxios";


const UseAdmin = () => {
    const {user}= useContext(AuthContext)
    const AxiosSecure= UseAxios()
    const{data: isAdmin,isPending:isAdminLoading}= useQuery({
        queryKey:[user?.email, "isAdmin"],
        queryFn:async()=>{
            const res= await AxiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin
        }
        
    })
    return [isAdmin,isAdminLoading]
};

export default UseAdmin;