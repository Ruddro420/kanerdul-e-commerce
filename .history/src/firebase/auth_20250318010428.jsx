import { auth } from "./firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword, getAuth } from "firebase/auth";

// create user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// sign in with email and password
export const doSignInWithEmailAndPassword = async (authContext, email, password) => {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Handle the logged-in user here (store user info in context or state)
    return userCredential;
};

// sign out
export const doSignOut = async () => {
    return auth.signOut();
};

// password reset
export const doPasswordReset = async (email) => {
    return sendPasswordResetEmail(email);
};

// update password
export const doPasswordUpdate = async (password) => {
    return updatePassword(password);
};

// email verification
export const doEmailVerification = async () => {
    return sendEmailVerification(auth.currentUser,{
        url: `${window.location.origin}/login`
    })
};