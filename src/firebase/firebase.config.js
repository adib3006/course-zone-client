// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA37Ik0PjLk7zHKumkxn2VXO809SqQVV-4",
  authDomain: "course-zone.firebaseapp.com",
  projectId: "course-zone",
  storageBucket: "course-zone.appspot.com",
  messagingSenderId: "883292141011",
  appId: "1:883292141011:web:d3460bfa03ea6a14d06b26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;