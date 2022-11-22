import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4X4krRHFJXn33cejIyNn9lZyDYxeUkhs",
    authDomain: "papa-ku.firebaseapp.com",
    projectId: "papa-ku",
    storageBucket: "papa-ku.appspot.com",
    messagingSenderId: "856246589250",
    appId: "1:856246589250:web:bbc533a4356a7380ebdadb",
    measurementId: "G-JZR6055YX4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)