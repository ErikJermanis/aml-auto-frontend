import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBoUk-fZF-48S-fO83fNj9rewS7n0Vf40",
  authDomain: "automotolabilni-automobili.firebaseapp.com",
  projectId: "automotolabilni-automobili",
  storageBucket: "automotolabilni-automobili.appspot.com",
  messagingSenderId: "615750595970",
  appId: "1:615750595970:web:a80c9f7458e9a56e978b9b",
  measurementId: "G-HZDLXQ3KQL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);