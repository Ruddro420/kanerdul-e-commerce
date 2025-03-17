import { auth } from "./firebase";


export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return auth.createUserWithEmailAndPassword(auth,email, password);
}