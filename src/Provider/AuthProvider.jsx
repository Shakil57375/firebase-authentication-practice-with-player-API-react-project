import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    // const user = {displayName : "mohammad"}
    const [user,setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const forgetPass = (email) =>{
        setLoader(true)
        return sendPasswordResetEmail(auth,email)
    }
    const sendVerificationEmail = (user) =>{
        setLoader(true)
        return sendEmailVerification(user)
    }
    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () =>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loader,
        createUser,
        login,
        forgetPass,
        sendVerificationEmail,
        logOut,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;