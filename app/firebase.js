import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwz_cg64FpcZBZH7NnKnYzkV_DPI-Zmck",
  authDomain: "dentist-9863b.firebaseapp.com",
  projectId: "dentist-9863b",
  storageBucket: "dentist-9863b.appspot.com",
  messagingSenderId: "527375872085",
  appId: "1:527375872085:web:4d5a7a92506811481ae4dc",
  measurementId: "G-Y98HWVXGEC"
};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };