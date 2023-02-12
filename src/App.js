import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import './styles/header.css';

import Header from './components/_header';
import Home from './components/_home';
import Art from './components/_art';
import Design from './components/_design';
import BeauYeRoc from './components/_beauyeroc';
import Programming from './components/_programming';
import AboutMe from './components/_aboutme';
import Footer from './components/_footer';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <div id="header" className="app">
          <Header/>
        </div>
        <div id="component" className="app">
          <Routes>
            <Route path="*" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/art" element={<Art/>} />
            <Route path="/design" element={<Design/>} />
            <Route path="beau-ye-roc" element={<BeauYeRoc/>} />
            <Route path="programming" element={<Programming/>} />
            <Route path="about-me" element={<AboutMe/>} />
          </Routes>  
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;