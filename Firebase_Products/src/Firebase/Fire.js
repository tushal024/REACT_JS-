// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_oFr_hHv2ijETfDZW-Ua81roccz7i8mQ",
  authDomain: "registration-form-a4362.firebaseapp.com",
  projectId: "registration-form-a4362",
  storageBucket: "registration-form-a4362.firebasestorage.app",
  messagingSenderId: "987970680886",
  appId: "1:987970680886:web:8f1992c5074d6203888097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export  const db= getFirestore(app)