import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the Citizen Feedback Portal</h1>
        <p className="hero-subtitle">
          Report civic issues instantly and help improve your city.  
          Quick • Easy • Transparent  
        </p>

        <div className="hero-buttons">
          <Link to="/report" className="hero-btn primary">Report an Issue</Link>
          <Link to="/issues" className="hero-btn secondary">View Issues</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Our Services</h2>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🗑️</span>
            <h3>Garbage Issues</h3>
            <p>Report uncollected garbage, dirty areas, or waste problems.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">💡</span>
            <h3>Street Lights</h3>
            <p>Faulty or broken street lights affecting your safety? Inform us.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🚧</span>
            <h3>Road Damage</h3>
            <p>Potholes, cracks, or damaged roads? Submit details with location.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🚰</span>
            <h3>Water Issues</h3>
            <p>Leakage, contamination, or supply issues? We are here to help.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-title">About the Portal</h2>
        <p className="about-text">
          This platform allows citizens to easily raise complaints about municipal
          issues. We ensure transparency, faster response, and proper tracking of
          issues. Together, we can make our city better!
        </p>
      </div>
    </div>
  );
}

export default Home;

