import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCLc-fwc8qY5uaC4MvJ4YeX1dVdZzoaW2I",
  authDomain: "dabro-food.firebaseapp.com",
  projectId: "dabro-food",
  storageBucket: "dabro-food.appspot.com",
  messagingSenderId: "889113170081",
  appId: "1:889113170081:web:acf4105725c4875882e0e0",
  measurementId: "G-81GCNGCYQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreData = getFirestore(app);
//const productsList = collection(firestoreData, "products");


// async function getD (db, q) {
//   let re = [];
//   const querySnapshot = await getDocs(collection(db, q));
//   re = querySnapshot.docs.map(doc => doc.data());
//   return re
// }

// const rem = getD(db, "products")

export default firestoreData;

