import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/compat/storage';
import firebase from "firebase/compat/app";
// import { firebaseAPI } from "./APIkeys.key";


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export const imgStorage = firebase.storage;
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
});
export const storage = getStorage(app);