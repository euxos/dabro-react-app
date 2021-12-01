import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCLc-fwc8qY5uaC4MvJ4YeX1dVdZzoaW2I',
    authDomain: 'dabro-food.firebaseapp.com',
    projectId: 'dabro-food',
    storageBucket: 'dabro-food.appspot.com',
    messagingSenderId: '889113170081',
    appId: '1:889113170081:web:acf4105725c4875882e0e0',
    measurementId: 'G-81GCNGCYQT',
}

const app = initializeApp(firebaseConfig);
export const firestoreData = getFirestore(app);

export async function getProduct(query) {
    const productRef = doc(firestoreData, query);
    const productSnap = await getDoc(productRef);
    const product = productSnap.data();

    return product;
}

export async function getProducts() {
    const productsCol = collection(firestoreData, 'products');
    const productsSnap = await getDocs(productsCol);
    const products = productsSnap.docs.map((doc) => doc.data());

    return products;
}
