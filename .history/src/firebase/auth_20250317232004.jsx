import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// create user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

// sign out
export const doSignOut = async () => {
    return auth.signOut();
};

// password reset
export const doPasswordReset = async (email) => {
    return auth.sendPasswordResetEmail(email);
};

// update password
export const doPasswordUpdate = async (password) => {
    return auth.currentUser.updatePassword(password);
};