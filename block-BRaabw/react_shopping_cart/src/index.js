import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
const user = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={user ? <App /> : <Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);
