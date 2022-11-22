import {auth} from "./firebase-config";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";

export function login(email, password)
{
    signInWithEmailAndPassword(auth, email, password)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

export function logout()
{
    signOut(auth)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

export function registration(email, password)
{
    createUserWithEmailAndPassword(auth, email, password)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}