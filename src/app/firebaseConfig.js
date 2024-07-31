// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5txTkIqBSsoT0PgG0Ww9cy9H1ASyoQ8I",
  authDomain: "prabin-web.firebaseapp.com",
  projectId: "prabin-web",
  storageBucket: "prabin-web.appspot.com",
  messagingSenderId: "926897820319",
  appId: "1:926897820319:web:af47a503759a5008e3c8aa",
  measurementId: "G-RLQMTHMYRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};