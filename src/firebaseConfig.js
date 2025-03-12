// Import the necessary functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import the auth module

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZbRiPVkbXtdnujH1eery0AO0dTW5Yt7Y",
  authDomain: "react-firebase-auth-emai-38c12.firebaseapp.com",
  projectId: "react-firebase-auth-emai-38c12",
  storageBucket: "react-firebase-auth-emai-38c12.firebasestorage.app",
  messagingSenderId: "870591730414",
  appId: "1:870591730414:web:2a2b54313252113a6919ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };



