import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";

import App from "./App";
import reducers from "./reducers"; // Your existing reducers

// Configure the store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: reducers, // Pass your reducers here
  // You can add additional middleware if needed, but redux-thunk is included by default
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
