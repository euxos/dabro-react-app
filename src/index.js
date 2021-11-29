import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import fireStore from "./fireStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ fireStore }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
