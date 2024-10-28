import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./ducks/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
//wrapping the entire app in Provider makes redux store available to all components in the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


/* ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); */
