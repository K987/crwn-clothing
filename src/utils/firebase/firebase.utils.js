// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB9etFeqZljhZXnJuTI-5xjnkeaupguwk",
    authDomain: "crwn-clothing-51639.firebaseapp.com",
    projectId: "crwn-clothing-51639",
    storageBucket: "crwn-clothing-51639.appspot.com",
    messagingSenderId: "849604710993",
    appId: "1:849604710993:web:10993e84f9d03bca251e70"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider({
    prompt: "select_account",

});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) {
        return;
    }
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.error(error);
        }
    }

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    }
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    }
    return await signInWithEmailAndPassword(auth, email, password);
}