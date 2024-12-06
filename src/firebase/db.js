import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
const firestore = getFirestore(app); 
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { firestore,app,db,storage };