import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./ducks/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch({ type: "LOAD_TODOS_FROM_COOKIES" });
/* simultaneously creating an action object with a type property and dispatching this action on app load. 
In Redux, you can dispatch any action with a type string, even if it hasn't been explicitly defined as an action creator or constant. 
 */
console.log("dispatch loadTodos");
root.render(
  //wrapping the entire app in Provider makes redux store available to all components in the app
  <Provider store={store}>
    <App />
  </Provider>
);

// Dispatch the action to load todos after sagas are running
