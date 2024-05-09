// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
});

const db = firebaseConfig.firestore();


// Add Todo Feature
const addTodoToFirestore = (todo) => {
  return db.collection('todos').add({
    todo: todo,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
};

// Delete Todo Feature
const deleteTodo = (id) => {
  return db.collection('todos').doc(id).delete();
};


// Update Todo Feature
const updateTodo = (id, newTodo) => {
  return db.collection('todos').doc(id).update({
    todo: newTodo,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
};

export { db, deleteTodo, addTodoToFirestore, updateTodo };

