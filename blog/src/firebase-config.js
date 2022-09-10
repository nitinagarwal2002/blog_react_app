// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXTG3LPwYAEWr-W8VfdhR8UBz4mu7UUXk",
  authDomain: "blog-7e5fa.firebaseapp.com",
  projectId: "blog-7e5fa",
  storageBucket: "blog-7e5fa.appspot.com",
  messagingSenderId: "16287537535",
  appId: "1:16287537535:web:a6de6c094aa76a1c5be24a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth =getAuth(app);
export const provider=new GoogleAuthProvider();