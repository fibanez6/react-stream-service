import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StreamContext from './contexts/StreamContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StreamContext >
    <App />
  </StreamContext>
);

