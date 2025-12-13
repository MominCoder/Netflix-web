import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCILel_MExK0qmhViWzhZwIy_VOdUYgVP8",
  authDomain: "cinemeflix.firebaseapp.com",
  projectId: "cinemeflix",
  storageBucket: "cinemeflix.firebasestorage.app",
  messagingSenderId: "44600329792",
  appId: "1:44600329792:web:63299596fbaa023028c1a5",
  measurementId: "G-21D2MXSPCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//
export const auth = getAuth()