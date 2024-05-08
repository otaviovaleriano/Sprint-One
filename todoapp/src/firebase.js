// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAJLiHrSyo_kWa_Q-atLasBawY-iZffyNs",
  authDomain: "todoapp-1a1b1.firebaseapp.com",
  projectId: "todoapp-1a1b1",
  storageBucket: "todoapp-1a1b1.appspot.com",
  messagingSenderId: "1076658935118",
  appId: "1:1076658935118:web:b96627d63657e9cd25fa1f"
});

const db = firebaseConfig.firestore();

export { db };