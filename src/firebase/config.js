import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEDsXirvlkiJYBCiA5zqxnnLnbt7WeSnY",
  authDomain: "sidcup-clone.firebaseapp.com",
  projectId: "sidcup-clone",
  storageBucket: "sidcup-clone.appspot.com",
  messagingSenderId: "1098983771870",
  appId: "1:1098983771870:web:ec441d4fd7845992a03c4f",
  measurementId: "G-L8HVH7PQ1V"
};

export const app = initializeApp(firebaseConfig);