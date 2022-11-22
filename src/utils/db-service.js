import {doc, getDoc, updateDoc, setDoc, arrayUnion} from "firebase/firestore";
import { db } from "./firebase-config";

export async function addToDo(tittle, uid)
{
    const ref = doc(db, 'todos', uid )
    const temp = await getDoc(ref)
    if(temp.exists())
        await updateDoc(ref, {todo: arrayUnion(title)})
    else
        await setDoc(ref, {todo: [title]})
}