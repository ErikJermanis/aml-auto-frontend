import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAymvtir4aQe2ZUnV8xTX9LRpEtfvLws9Q",
  authDomain: "aml-auto.firebaseapp.com",
  projectId: "aml-auto",
  storageBucket: "aml-auto.appspot.com",
  messagingSenderId: "775842276708",
  appId: "1:775842276708:web:e03561739f45d8b5a80671",
  measurementId: "G-PW8EF9JER0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);