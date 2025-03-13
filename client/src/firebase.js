// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log("🚀 ~ firebaseConfig.import.meta.env.VITE_FIREBASE_API_KEY:", import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chatify-afab3.firebaseapp.com",
  projectId: "chatify-afab3",
  storageBucket: "chatify-afab3.appspot.com",
  messagingSenderId: "446474111653",
  appId: "1:446474111653:web:b686b51386c121a742db4c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
