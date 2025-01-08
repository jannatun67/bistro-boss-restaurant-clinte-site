import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../hooks/UseAxiosPublic";


const SocialLogin = () => {
    const{googleLogin}= useContext(AuthContext)
    const navigate=useNavigate()
    const axiosPublic = UseAxiosPublic()


    const handelGoogleSignIn =()=>{
        googleLogin()
        .then(result=>{
            // console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post("/users", userInfo)
            .then(res =>{
                // console.log("sign In",res);
                navigate("/")
            })
           
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
      <div>
        <button onClick={handelGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle>
         Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;