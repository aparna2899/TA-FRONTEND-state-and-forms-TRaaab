import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';


const user = localStorage.getItem('user');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={user ? <App /> : <Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);
