import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li><Link to="/art">works</Link></li>
          <li><Link to="/design">design</Link></li>
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
        <div id="update">
          <h3>**CURRENT**</h3>
          <h4>
            <b>Sanman Studios Arts Residency</b> in Houston, TX and<br/>
            <b>Wave Farm Radio Art Residency</b> in Acra, NY.<br/><br/>
            <i>In-Studio at Sanman Studios from March to late 2025</i>
          </h4>
        </div>
      </header>
      <Nav/>
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