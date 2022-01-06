import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv23XNujxiHQfJ-imd6iIFI479N_F779M",
  authDomain: "blogreactfirebase-2a455.firebaseapp.com",
  projectId: "blogreactfirebase-2a455",
  storageBucket: "blogreactfirebase-2a455.appspot.com",
  messagingSenderId: "486510616908",
  appId: "1:486510616908:web:3ec002af151dc02dd1afe9",
  measurementId: "G-0SPK3EMMTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
