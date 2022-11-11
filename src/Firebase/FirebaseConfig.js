// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVcPFzTS2DgKo4XfXo5X-D0JrCKcXtdIA",
  authDomain: "swims-app.firebaseapp.com",
  projectId: "swims-app",
  storageBucket: "swims-app.appspot.com",
  messagingSenderId: "476112228701",
  appId: "1:476112228701:web:34ba7a4ec28a2d7564d8b4",
  measurementId: "G-9TV1Q2H45C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
