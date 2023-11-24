import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebaseConfig";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // Google Login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

         // create user email and password
    const createUserEmailAndPassword = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // logOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    // update user
    const updateUser = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
    }
     // login
     const loginEmailWithPassword = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }























    // user user manage
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log('currentUser', currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUserEmailAndPassword,
        loginEmailWithPassword,
        logOut,
        updateUser,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;