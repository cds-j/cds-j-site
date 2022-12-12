import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/art">art</Link></li>  
          <li><Link to="/programming">programming</Link></li>
          <li><Link to="/beau-ye-roc">beau yé roc</Link></li>
          <li><a href="https://forumcache.xyz" target="_blank" rel="noopener noreferrer">forum cache</a></li>
          <li><Link to="/about-me">about me</Link></li>
        </ul>
      </nav>
    </div>
  )
}

function Header() {
  return (
    <div>
      <header>
        <h1>corey de'juan sherrard jr</h1>
        <h2>interdisciplinary artist</h2>
      </header>
      <Nav/>
    </div>
  )
}

export default Header;