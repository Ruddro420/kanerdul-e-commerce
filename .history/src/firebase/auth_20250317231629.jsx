import { auth } from "./firebase";

export const signInWithEmailAndPassword = async (email, password) => {
    return auth.signInWithEmailAndPassword(auth,email, password);
}