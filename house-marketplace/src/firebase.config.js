import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF8QrFKXKHRdSMPXXabPuFg1NGnw-0JEc",
  authDomain: "house-marketplace-app-60c02.firebaseapp.com",
  projectId: "house-marketplace-app-60c02",
  storageBucket: "house-marketplace-app-60c02.appspot.com",
  messagingSenderId: "845988852451",
  appId: "1:845988852451:web:1b7d9e9203ef5537048bd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
