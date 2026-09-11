import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li><Link to="/art">selected works</Link></li>
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
        <h1>Corey Sherrard Jr</h1>
        <h2>visual; sound; engineering</h2>
        <Nav/>
        <div id="update">
          <hr/><h3>Exhibiting</h3><hr/>
          <h4>
            <a href="https://utvac.org/event/how-to-grow-the-cowpea" target="_blank" rel="noreferrer"><b>How To Grow The Cowpea: Survival Strategies From The US South</b></a> (w/ Saharan Dust Season Collective) @ Visual Arts Center at University of Texas, Austin from <i>September 4, 2026 - March 5, 2027</i>
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
// <li><Link to="/opennotes">references + open notes</Link></li>

export default Header;