import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API,
  authDomain: "ecommerce-products-317e8.firebaseapp.com",
  projectId: "ecommerce-products-317e8",
  storageBucket: "ecommerce-products-317e8.appspot.com",
  messagingSenderId: "960045175365",
  appId: "1:960045175365:web:3fb90075ca3d8c28b2892c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db