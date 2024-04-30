import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/compat/storage';
import firebase from "firebase/compat/app";
import { firebaseAPI } from "./APIkeys.key";


const firebaseConfig = {
    apiKey: firebaseAPI.apiKey,
    authDomain: firebaseAPI.authDomain,
    projectId: firebaseAPI.projectId,
    storageBucket: firebaseAPI.storageBucket,
    messagingSenderId: firebaseAPI.messagingSenderId,
    appId: firebaseAPI.appId,
};

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