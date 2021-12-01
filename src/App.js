import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar';
import AppRouter from './components/AppRouter';

import { downloadProducts } from './store/productsReducer';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from './firestoreApp';

const App = () => {
    const dispatch = useDispatch();
    const product = useSelector(store => store.products)
   

    useEffect(() => {
        getProducts().then((res) => {
            dispatch(downloadProducts(res));
        });
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Navbar />

            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
