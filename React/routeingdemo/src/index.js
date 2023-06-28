import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/speakwithme' element={<ContactUs />}/>
      </Routes>
    </BrowserRouter>
);