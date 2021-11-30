import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoordinateProvider from './contexts/Coordinates';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <CoordinateProvider>
      <App />
    </CoordinateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
