// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/parent" className="nav-link">Parent Page</Link>
        </li>
        <li className="nav-item">
          <Link to="/child" className="nav-link">Child Page</Link>
        </li>
        {/* Add more menu items and links for other pages as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
