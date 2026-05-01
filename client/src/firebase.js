import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-18ad0.firebaseapp.com",
  projectId: "mern-estate-18ad0",
  storageBucket: "mern-estate-18ad0.firebasestorage.app",
  messagingSenderId: "385959742869",
  appId: "1:385959742869:web:742f21711fc5d16f1dba9c"
};

export const app = initializeApp(firebaseConfig);
