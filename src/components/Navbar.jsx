import React from 'react';
import { Link } from 'react-router-dom';

const navbar=()=>{
    return(
<nav>
<h1>MINOR PROJECT</h1>
<div className="nav-part2">
<Link to={"/pages/Home"}> HOME </Link>
<Link to={"/pages/About"}> ABOUT </Link>
<Link to={"/pages/Legal"}> LEGAL </Link>
<Link to={"/pages/Contact"}> CONTACT </Link>
</div>
<button>Let's Talk<svg fill="none" viewBox="0 0 20 20">
          <path fill="#fff" d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z">
          </path>
      </svg></button>
      <div id="nav-bottom"></div>
</nav>
    )
}
export default navbar