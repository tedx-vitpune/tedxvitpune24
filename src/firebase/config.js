// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA61oET7Z6ZnUt_eFyPtIvRjexb8iQZORM",
    authDomain: "tedx-pune.firebaseapp.com",
    projectId: "tedx-pune",
    storageBucket: "tedx-pune.firebasestorage.app",
    messagingSenderId: "413730516955",
    appId: "1:413730516955:web:2b26d0ba0825bab017c1fe",
    measurementId: "G-VR47265WL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getDatabase(app);