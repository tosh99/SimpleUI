import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./app";
import './styles/base/theme.dark.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);