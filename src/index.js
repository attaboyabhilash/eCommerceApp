import React from 'react';
import ReactDOM from 'react-dom';
import CustomContextProvider from './contexts/CustomContext'
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <CustomContextProvider>
      <App />
    </CustomContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

