import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);  
            setLoading(false);           
        });
        return ()=>unsubscribe();
    },[]);
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>);
}

export default AuthProvider;
