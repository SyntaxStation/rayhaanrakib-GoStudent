import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import auth from "./firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider;
const facebookProvider = new FacebookAuthProvider;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const continueWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }
    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userUpdateProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return (() => {
            unSubscribe();
        })
    }, [])




    const AuthInfo = {
        user,
        loading,
        signup,
        userUpdateProfile,
        continueWithGoogle,
        continueWithFacebook,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;