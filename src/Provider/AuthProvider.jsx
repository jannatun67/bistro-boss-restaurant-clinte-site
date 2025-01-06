import { createUserWithEmailAndPassword,   onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';
import { useLocation } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
import UseAxiosPublic from '../hooks/UseAxiosPublic';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const location=useLocation
    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const axiosPublic=UseAxiosPublic()



    // Google Login

    const googleLogin= () =>{
        setLoading(true)
       return signInWithPopup(auth, GoogleProvider)
    }

    // register
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // update user
    const updateUser= (name,photo)=>{
     return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }

    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, currentUser => {
           setUser(currentUser)
         if (currentUser) {
            const userInfo={
                email:currentUser?.email
            }
            axiosPublic.post("/jwt",userInfo)
            .then(res=> {
                if (res.data.token) {
                    localStorage.setItem("access token",res.data.token)
                }
            })
         }
         else{
            localStorage.removeItem("access token")
         }
           setLoading(false)
          });
          return ()=>{
            return unsubscribe()
          }
    },[axiosPublic])
    const info={
        user,
        setUser,
        loading,
        loginUser,
        createUser,
        logOut,
        location,
        updateUser,
        googleLogin
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;