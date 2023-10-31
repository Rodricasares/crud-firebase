// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA23PJr5BNhQH2FeL24ctEYc_iLxVIYko",
  authDomain: "crud-firebase-e5fc2.firebaseapp.com",
  projectId: "crud-firebase-e5fc2",
  storageBucket: "crud-firebase-e5fc2.appspot.com",
  messagingSenderId: "540654717972",
  appId: "1:540654717972:web:4a6606d25e74c92c546b01"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}