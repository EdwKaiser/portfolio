import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/index.scss';
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/'} element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


