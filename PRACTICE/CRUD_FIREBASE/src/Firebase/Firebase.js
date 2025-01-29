// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsUmAGCxi5MQ3xkA1hCKynALIxLmMGI7g",
  authDomain: "crud-with-redux-9f83e.firebaseapp.com",
  projectId: "crud-with-redux-9f83e",
  storageBucket: "crud-with-redux-9f83e.firebasestorage.app",
  messagingSenderId: "941167343310",
  appId: "1:941167343310:web:f22028e6473a97bfb0c29f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  let DataBase = getFirestore(app) 