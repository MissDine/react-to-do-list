import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwcfH68wEZlry0446GiAfN7aOTFrYo0yQ",
    authDomain: "to-do-list-e4669.firebaseapp.com",
    projectId: "to-do-list-e4669",
    storageBucket: "to-do-list-e4669.appspot.com",
    messagingSenderId: "712309768189",
    appId: "1:712309768189:web:172b0b5818a850e1c2e394",
    measurementId: "G-HQV437VH1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;