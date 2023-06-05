import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIihMzOSSvVdInYNlnM-6RYj-urJ_-D0c",
  authDomain: "miniblog-2142f.firebaseapp.com",
  projectId: "miniblog-2142f",
  storageBucket: "miniblog-2142f.appspot.com",
  messagingSenderId: "770183048261",
  appId: "1:770183048261:web:1d4c20dbf0c24577f6872c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };