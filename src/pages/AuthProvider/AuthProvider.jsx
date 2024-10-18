import { createContext, useState } from "react";
import app from "../../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
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
    }
    const userInfo = {
        loading,
        createUser,
        signIn
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>);
}

export default AuthProvider;
