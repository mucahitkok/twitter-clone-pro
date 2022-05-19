import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAFb3Bz3BKY21yFtlwn3obMEK_6Z92NCJQ",
    authDomain: "tw-clone-pro.firebaseapp.com",
    projectId: "tw-clone-pro",
    storageBucket: "tw-clone-pro.appspot.com",
    messagingSenderId: "477345220987",
    appId: "1:477345220987:web:9c1bf9e1a6d326175195de"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage()


export default app;
export { db, storage }