import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li><Link to="/art">works</Link></li>
          <li><Link to="/design">design</Link></li>
          <li><Link to="/opennotes">references + open notes</Link></li>
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
        <h2>artist + engineer</h2>
        <Nav/>
        <div id="update">
          <h3>**UPDATE**</h3>
          <hr/>
          <h4>
            <b>Sanman Studios</b> artist-in-residence<hr/>
            <b>Public Index</b> exhibition @ <b>Project Row Houses</b><br/>October 18, 2025 - February 15, 2026
          </h4>
        </div>
      </header>
      
    </div>
  )
}

// copy the update div underneath at the bottom of the header tag above whenever
// you have something to share as far as updates

/*

*/
// <li><Link to="/design">design</Link></li>
// <li><Link to="/programming">programming</Link></li>

export default Header;