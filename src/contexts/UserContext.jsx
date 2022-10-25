import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDark, setIsDark] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserInfo = (name,photoURL) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        });
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    
    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }

    const passwordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserInfo,
        signIn,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        passwordReset,
        logOut,
        isDark,
        setIsDark
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;