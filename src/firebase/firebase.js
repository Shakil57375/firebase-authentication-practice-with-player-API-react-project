// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqAfj1uPz7zKfby2dyZC0IINW_UWwFkR0",
  authDomain: "practice-project-firebas-3ca43.firebaseapp.com",
  projectId: "practice-project-firebas-3ca43",
  storageBucket: "practice-project-firebas-3ca43.appspot.com",
  messagingSenderId: "844114924885",
  appId: "1:844114924885:web:a96bb5603dd480dc328bdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}