import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCei0ZkxVJltC4fO0C1nzBVaR95ASKN-EI",
  authDomain: "good-2c950.firebaseapp.com",
  databaseURL:
    "https://good-2c950-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "good-2c950",
  storageBucket: "good-2c950.firebasestorage.app",
  messagingSenderId: "1061141180429",
  appId: "1:1061141180429:web:924ad4d33a3a66145ea544",
  measurementId: "G-WXYG3K145Z",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
