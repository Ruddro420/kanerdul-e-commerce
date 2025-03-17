import { auth } from "./firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return auth.createUserWithEmailAndPassword(auth,email, password);
}