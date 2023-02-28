
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";



const firebaseConfig = {
    apiKey: "AIzaSyBp7EwUUSTgm1A-YkwZ32ITTcc9O5Gexzg",
    authDomain: "test1-af974.firebaseapp.com",
    projectId: "test1-af974",
    storageBucket: "test1-af974.appspot.com",
    messagingSenderId: "906152289144",
    appId: "1:906152289144:web:917f8bd4c31f067dcdde8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};