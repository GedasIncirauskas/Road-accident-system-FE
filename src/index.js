import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoordinateProvider from './contexts/Coordinates';
import FontStyles from './fonts/Font.Styles';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <CoordinateProvider>
      <FontStyles />
      <App />
    </CoordinateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
