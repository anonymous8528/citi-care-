import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-shell">
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-badge">Smart Civic Management Platform</span>

          <h1 className="hero-title">
            Transforming City Issue Reporting Into a Fast, Transparent Experience
          </h1>

          <p className="hero-subtitle">
            City Care Service helps citizens report municipal problems, track progress,
            and stay connected with officers and administrators through one modern platform.
          </p>

          <div className="hero-buttons">
            <Link to="/report" className="hero-btn primary">
              Report an Issue
            </Link>
            <Link to="/my-issues" className="hero-btn secondary">
              Track My Issues
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Complaint access</p>
            </div>
            <div className="stat-card">
              <h3>Fast</h3>
              <p>Officer coordination</p>
            </div>
            <div className="stat-card">
              <h3>Live</h3>
              <p>Status & progress updates</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card main-card">
            <div className="visual-top">
              <span className="dot blue"></span>
              <span className="dot purple"></span>
              <span className="dot cyan"></span>
            </div>
            <h3>City Operations Dashboard</h3>
            <p>Track complaints, assign officers, and improve response quality.</p>

            <div className="visual-metrics">
              <div>
                <strong>Pending</strong>
                <span>128</span>
              </div>
              <div>
                <strong>In Progress</strong>
                <span>64</span>
              </div>
              <div>
                <strong>Resolved</strong>
                <span>312</span>
              </div>
            </div>
          </div>

          <div className="floating-card floating-one">
            <span>Road Damage</span>
            <strong>Reported with GPS</strong>
          </div>

          <div className="floating-card floating-two">
            <span>Water Leakage</span>
            <strong>Officer Assigned</strong>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-head">
          <span className="section-tag">Core Services</span>
          <h2 className="section-title">Everything needed for modern civic issue handling</h2>
          <p className="section-text">
            Designed for citizens, officers, and administrators to work together with clarity.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🗑️</div>
            <h3>Garbage Management</h3>
            <p>
              Report uncollected garbage, dirty zones, and sanitation issues with details and photos.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💡</div>
            <h3>Street Light Monitoring</h3>
            <p>
              Raise complaints for faulty or damaged street lights affecting visibility and safety.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚧</div>
            <h3>Road Damage Tracking</h3>
            <p>
              Submit road cracks, potholes, and infrastructure damage along with exact location.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚰</div>
            <h3>Water Problem Reporting</h3>
            <p>
              Escalate leakage, contamination, low supply, and pipeline problems quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-head">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">A simple workflow with powerful accountability</h2>
        </div>

        <div className="workflow-grid">
          <div className="workflow-step">
            <span className="step-number">01</span>
            <h3>Citizen Reports</h3>
            <p>Submit issue details with area, description, photo, and live location.</p>
          </div>

          <div className="workflow-step">
            <span className="step-number">02</span>
            <h3>Admin Assigns</h3>
            <p>Administrators review reports and assign the correct officer.</p>
          </div>

          <div className="workflow-step">
            <span className="step-number">03</span>
            <h3>Officer Updates</h3>
            <p>Officers add progress, change status, and resolve the complaint.</p>
          </div>

          <div className="workflow-step">
            <span className="step-number">04</span>
            <h3>Citizen Tracks</h3>
            <p>Users can follow issue progress transparently from submission to resolution.</p>
          </div>
        </div>
      </section>

      <section className="about-section premium-about">
        <div className="about-left">
          <span className="section-tag">About Platform</span>
          <h2>Built to improve urban response and citizen trust</h2>
          <p>
            This portal is designed to make municipal complaint handling easier, faster,
            and more transparent. Citizens can report issues in minutes, officers can
            manage action updates efficiently, and administrators can monitor the entire
            city support process with better control.
          </p>
        </div>

        <div className="about-right">
          <div className="about-info-card">
            <h3>Transparent</h3>
            <p>Track every issue from report to final resolution.</p>
          </div>
          <div className="about-info-card">
            <h3>Reliable</h3>
            <p>Role-based management keeps responsibilities clear.</p>
          </div>
          <div className="about-info-card">
            <h3>Scalable</h3>
            <p>Built for growing city operations and digital governance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;