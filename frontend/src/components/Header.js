import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";  // Import styles

const Header = () => {
  return (
    <header className="header">
      <h1>IMAGE DEHAZING
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Project">project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
