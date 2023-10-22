// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-294c7.firebaseapp.com",
  projectId: "mern-estate-294c7",
  storageBucket: "mern-estate-294c7.appspot.com",
  messagingSenderId: "794556114846",
  appId: "1:794556114846:web:74c5d9fbf3272e229b988f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);