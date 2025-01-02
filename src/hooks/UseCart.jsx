import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

  
const UseCart = () => {
    const{user}=useContext(AuthContext)
    console.log(user);
    const AxiosSecure=UseAxios()
    const {refetch,data:cart=[]} = useQuery({
        queryKey: ['cart',user?.email],
        queryFn:async () =>{
            const res = await AxiosSecure.get(`/carts?email=${user.email}`);
            return res.data
        }   
      })
      return [cart, refetch]
};

export default UseCart;