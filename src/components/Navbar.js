import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Nrithya Parichay</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/DanceStyles">Dance Styles</Link></li>
        <li><Link to="/Classes">Classes</Link></li>
        <li><Link to="/PerformancePage">Performance</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/ContactPage">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

