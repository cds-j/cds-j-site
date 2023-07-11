import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li><Link to="/art">art</Link></li>
          <li><Link to="/design">design</Link></li>
          <li><Link to="/programming">programming</Link></li>
          <li><Link to="/about-me">about me</Link></li>
        </ul>
        <ul>
          <li><a href="http://www.instagram.com/tdobp" target="_blank" rel="noreferrer"><i>t.d.o.b.p.</i></a></li>
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
      </header>
      <Nav/>
    </div>
  )
}

export default Header;