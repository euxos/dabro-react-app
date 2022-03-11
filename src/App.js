import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useGoogleSheets from "use-google-sheets";
import { useDispatch } from "react-redux";

import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { downloadData } from "./store/dataReducer";

const App = () => {

	const dispatch = useDispatch();
	
	const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEET_ID,
		sheetsNames: ['Data'],
  });

	useEffect(() => {
		if (data.length > 0) {
			dispatch(downloadData(data[0].data));
		}
	}, [dispatch, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
  return <div>Error!</div>;
  }

	return (
		<BrowserRouter>
			<Header />
			<Main />
		</BrowserRouter>
	);
};

export default App;