import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './index.css';
import App from './App';
import BeauYeRoc from "./routes/BeauYeRoc";
import AboutMyself from './routes/AboutMyself';
import DesignAndProgramming from './routes/DesignAndProgramming';
import CV from './routes/CV';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/" element={<App />} />
        <Route path="beau-ye-roc" element={<BeauYeRoc />} />
        <Route path="about-myself" element={<AboutMyself />} />
        <Route path="design-and-programming" element={<DesignAndProgramming />} />
        <Route path="cv" element={<CV />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
