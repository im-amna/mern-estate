// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-18ad0.firebaseapp.com",
  projectId: "mern-estate-18ad0",
  storageBucket: "mern-estate-18ad0.firebasestorage.app",
  messagingSenderId: "385959742869",
  appId: "1:385959742869:web:742f21711fc5d16f1dba9c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
