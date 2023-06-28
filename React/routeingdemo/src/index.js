import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Clients from './Pages/Clients';
import Projects from './Pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/aboutus' element={<AboutUs/>}>
          <Route path='clients' element={<Clients />} />
          <Route path='projects' element={<Projects />} />
        </Route>
        <Route path='/speakwithme' element={<ContactUs />}/>
      </Routes>
    </BrowserRouter>
);