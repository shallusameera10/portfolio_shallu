// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3QRQV0877I-0Ad0lLkNY6GRv-r0JyCj4",
  authDomain: "portfolio-d608c.firebaseapp.com",
  projectId: "portfolio-d608c",
  storageBucket: "portfolio-d608c.firebasestorage.app",
  messagingSenderId: "410269240008",
  appId: "1:410269240008:web:5c4e2eab7c0cddd70233fd",
  databaseURL: "https://console.firebase.google.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
