import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>City Care Service</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report">Report Issue</Link>
        <Link to="/issues">Issue List</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;

