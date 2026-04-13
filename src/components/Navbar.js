import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>City Care Service</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {user?.role === "citizen" && (
          <>
            <Link to="/report">Report Issue</Link>
            <Link to="/my-issues">My Issues</Link>
          </>
        )}

        {user?.role === "officer" && (
          <>
            <Link to="/assigned-issues">Assigned Issues</Link>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <Link to="/all-issues">All Issues</Link>
            <Link to="/manage-users">Manage Users</Link>
          </>
        )}

        {user ? (
          <>
            <span className="nav-user">Hi, {user.name} ({user.role})</span>
            <button className="nav-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;