import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { downloadProducts } from './store/productsStore';
import Navbar from './components/NavBar';
import AppRouter from './components/AppRouter';
import { useDispatch, useSelector } from 'react-redux';

import firestoreData from './firestoreApp';

const App = () => {
  const [products, loading] = useCollectionDataOnce(collection(firestoreData, "products"));
  const dispatch = useDispatch();

  useEffect(() => {
      if (loading === false) {
        dispatch(downloadProducts(products));
      } 
      
    }, [products]
  )
  

  return (
    <BrowserRouter>
      <Navbar />

        {/* {productsFromDB.map((product) => (
        <div key={product.id} style={{ border: "2px solid green" }}>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.price}</div>
        </div>
      ))}  */}

      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
