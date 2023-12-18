// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLo7qiSu-GtxwO9a6Y5iE9nikIEb8G2XQ",
  authDomain: "job-board-react.firebaseapp.com",
  projectId: "job-board-react",
  storageBucket: "job-board-react.appspot.com",
  messagingSenderId: "72408424842",
  appId: "1:72408424842:web:ce954ba205464f6a942873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
