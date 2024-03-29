// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query, DocumentReference, DocumentData } from "firebase/firestore";
import { Category } from "../../store/categories/categories.slice";


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
const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export type ObjectToAdd = {
    title: string;
};

export const addCollectionAndDocuments = async<T extends ObjectToAdd> (
    collectionKey: string,
    objectsToAdd: T[]
  ): Promise<void> => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    //console.log('done');
  };

export const getCategotriesAndDocuments = async () : Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const snapShot = await getDocs(q);
    
    return snapShot.docs.map(docSnapshot => docSnapshot.data() as Category);
};

export type UserData = {
    createdAt: Date,
    displayName: string,
    email: string 
};

export const createUserDocumentFromAuth = async (userAuth: User): Promise<DocumentReference<DocumentData> | void> => {
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

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) {
        return;
    }
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) {
        return;
    }
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);