// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Sszwh0p4Cdz_ts90lglj8QO-CUoAJJM",
  authDomain: "fir-1-483ee.firebaseapp.com",
  projectId: "fir-1-483ee",
  storageBucket: "fir-1-483ee.firebasestorage.app",
  messagingSenderId: "917205434383",
  appId: "1:917205434383:web:f5df890a0b4ded4e53e37a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)



  export let db  = getFirestore(app)