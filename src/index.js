import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './all.min.css';
import './pages/Dashboard/dashboard.css';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './pages/Website/context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);