import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration:'none',
    fontSize: '17px'
    
  };
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link to='/' style={navStyle}>
              <li>Home</li>
            </Link>
            <Link to='/about' style={navStyle}> 
              <li>about</li>
            </Link>
            <Link to='/contact' style={navStyle}> 
              <li>contact me</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav
