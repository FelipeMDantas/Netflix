import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOKJfxObT_HilTBQhWkE_PkrPxTyAFqmM",
  authDomain: "react-netflix-11b10.firebaseapp.com",
  projectId: "react-netflix-11b10",
  storageBucket: "react-netflix-11b10.appspot.com",
  messagingSenderId: "574881216747",
  appId: "1:574881216747:web:57c79ecd5bfeeaaaaba6ae",
  measurementId: "G-8RV4GSJHKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
