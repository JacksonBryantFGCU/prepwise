
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsn_mH1WXppSl55J7a9UQi3ihunVY34mM",
  authDomain: "prepwise-40e6f.firebaseapp.com",
  projectId: "prepwise-40e6f",
  storageBucket: "prepwise-40e6f.firebasestorage.app",
  messagingSenderId: "183010248341",
  appId: "1:183010248341:web:c8e96c44a3361e8cc57d9c",
  measurementId: "G-NXLB7SDJG1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);