// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvi8XqoCRKyjs5AT5rYfpKLX65mg2Hpr0",
  authDomain: "melbet-9ef1a.firebaseapp.com",
  projectId: "melbet-9ef1a",
  storageBucket: "melbet-9ef1a.firebasestorage.app",
  messagingSenderId: "1028134841653",
  appId: "1:1028134841653:web:84f8afb6729b8b4fb3307c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, updateDoc, doc };
