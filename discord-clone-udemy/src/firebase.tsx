import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7vaobQVH-ibWH9q9B7FJKywW3zGCCfM0",
  authDomain: "discord-clone-udemy-8141e.firebaseapp.com",
  projectId: "discord-clone-udemy-8141e",
  storageBucket: "discord-clone-udemy-8141e.appspot.com",
  messagingSenderId: "1018396456554",
  appId: "1:1018396456554:web:ce6465e285f219bd05bc13",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
