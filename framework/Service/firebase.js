import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/compat/storage';
import firebase from "firebase/compat/app";


const firebaseConfig = {
    apiKey: "AIzaSyBpuHeiWgqh1RIx8Io0EFUB8qVfMUqZ41s",
    authDomain: "x-note-5fd32.firebaseapp.com",
    projectId: "x-note-5fd32",
    storageBucket: "x-note-5fd32.appspot.com",
    messagingSenderId: "220127384688",
    appId: "1:220127384688:web:f92c5814eba1d18c1050b5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export const imgStorage = firebase.storage;
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);