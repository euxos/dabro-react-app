import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

import AppRouter from './components/AppRouter';

import { downloadProducts } from './store/productsReducer';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from './firestoreApp';


const App = () => {
	const dispatch = useDispatch();

	const products = useSelector(store => store.products);

	useEffect(() => {
		if (products.length === 0) {
			getProducts().then((docs) => {
				dispatch(downloadProducts(docs));

				localStorage.setItem('products', JSON.stringify(docs));
			});
		}


	}, [products, dispatch]);

	return (
		
			
			<BrowserRouter>
				<Header />
				<main className="App__main"></main>
				<AppRouter />
			</BrowserRouter>
		
	);
};

export default App;
