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
          <h3>**NOW**</h3>
          <h4>
            Showing at <b>George Washington Carver Museum & Cultural Center</b> for <b>Small Black Museum Vol. 3</b> group exhibition alongside <b>Nitashia Johnson</b> & <b>taylor barnes</b>.<br/>
            <b>**Closes on October 12, 2024**</b>
          </h4>
        </div>
      </header>
      <Nav/>
    </div>
  )
}

// <li><Link to="/design">design</Link></li>
// <li><Link to="/programming">programming</Link></li>

export default Header;