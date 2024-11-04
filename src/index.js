import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./ducks/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch({ type: 'LOAD_TODOS_FROM_COOKIES' });
console.log ('dispatch loadTodos')
//wrapping the entire app in Provider makes redux store available to all components in the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Dispatch the action to load todos after sagas are running
