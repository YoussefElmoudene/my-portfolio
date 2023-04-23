import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Services from "./components/services/Service";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App>
            <Routes>
                <Route exact path="/" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/experiences" element={<Experiences/>}/>
                <Route path="/certifications" element={<Certifications/>}/>
                <Route path="/contact-me" element={<Contact/>}/>
            </Routes>
        </App>
    </BrowserRouter>
);

reportWebVitals();
