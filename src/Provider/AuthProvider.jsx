import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';
import { useLocation } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const location=useLocation
    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

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
           console.log("current user",currentUser);
           setLoading(false)
          });
          return ()=>{
            return unsubscribe()
          }
    },[])
    const info={
        user,
        setUser,
        loading,
        loginUser,
        createUser,
        logOut,
        location,
        updateUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;