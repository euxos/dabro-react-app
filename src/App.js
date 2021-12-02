import React, { useEffect } from 'react';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import NavbarPannel from './components/NavbarPannel';
import AppRouter from './components/AppRouter';

import { downloadProducts } from './store/productsReducer';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from './firestoreApp';


const App = () => {
    const dispatch = useDispatch();

    const p = useSelector(store => store.products);

    useEffect(() => {
        if (p.length === 0) {
            getProducts().then((docs) => {
                dispatch(downloadProducts(docs));

                localStorage.setItem('products', JSON.stringify(docs));
            });
        }
    }, [dispatch]);

    return (
        
            
            <BrowserRouter>
                <NavbarPannel />

                <AppRouter />
            </BrowserRouter>
        
    );
};

export default App;
