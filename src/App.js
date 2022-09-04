import React from 'react';

import Header from './Header';
import Ticker from './Ticker';
import Events from './Events';

import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <nav id="navbar">
                <ul>
                    <li><Link to="/design-and-programming">design + programming</Link></li>
                    <li><Link to="/beau-ye-roc">beau yé roc</Link></li>
                    <li class="not-ready">roy haes</li>
                    <li><a href="https://forumcache.xyz" target="_blank" rel="noopener noreferrer">forum cache®</a></li>
                    <li><Link to="/about-myself">about myself</Link></li>
                </ul>
            </nav>
            <Ticker />
            <Events />
        </div> 
    )
}


export default App;