import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBk1-H9QC_mhqHYNe7nJuMWZfRQimEmIBY",
  authDomain: "hamsbd-60616.firebaseapp.com",
  projectId: "hamsbd-60616",
  storageBucket: "hamsbd-60616.appspot.com",
  messagingSenderId: "549982200700",
  appId: "1:549982200700:web:9e029b8f18cbc05c6dbaf9",
  measurementId: "G-PPL63PHGE6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
