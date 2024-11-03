import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

import Layout from './components/Layout'
import Home from './pages/home';
import './stylesheets/index.scss'
import './stylesheets/globals.scss'
import Curso from './pages/curso.jsx';

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<Layout />);


root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='curso' element={<Curso/>} >
                
            </Route>

        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);