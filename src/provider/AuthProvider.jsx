import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import axios from "axios";
 export const AuthContext = createContext(null)
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const ProfileUpdate = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          })  
    }
    const googleSingUp = () => {
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider)
}
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            
            if (currentUser) {
                axios.post('https://bistro-boss-server-lemon-theta.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        const token = data.data.token 
                        localStorage.setItem('access-token', token)
                        setLoading(false)
                })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return ()=>unSubscribe()
    },[])
    const userInfo = {
        user,
        loading,
        createUser,
        singIn,
        googleSingUp,
        logOut,
        ProfileUpdate
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;