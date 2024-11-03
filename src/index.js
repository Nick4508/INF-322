import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

import Layout from './components/Layout.jsx'
import Home from './pages/home';
import './stylesheets/index.scss'
import './components/navbar.jsx';

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<Layout />);


root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Rutas con el layout */}
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);