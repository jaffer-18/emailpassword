// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import global styles
import App from './App';  // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
