import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './App';
import reducers from './reducers'; // Your existing reducers

// Configure the store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: reducers, // Pass your reducers here
  // You can add additional middleware if needed, but redux-thunk is included by default
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
