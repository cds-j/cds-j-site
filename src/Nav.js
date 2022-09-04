import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav id="navbar">
                <ul>
                    <li><Link to="/design-and-programming">design + programming</Link></li>
                    <li><Link to="/beau-ye-roc">beau yé roc</Link></li>
                    <li class="not-ready">roy haes</li>
                    <li><a href="https://forumcache.xyz" target="_blank" rel="noopener noreferrer">forum cache®</a></li>
                    <li><Link to="/about-myself">about myself</Link></li>
                    <li><Link to="/cv">→ cirriculum vitae</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;