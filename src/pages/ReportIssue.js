import React, { useState } from "react";

function ReportIssue() {
  const [form, setForm] = useState({
    name: "",
    area: "",
    issueType: "",
    description: "",
    photo: "",
    location: "",
    date: new Date().toLocaleDateString(),
  });

  // Handle text inputs
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Convert uploaded image → Base64 (so we can store in localStorage)
  function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  // Get current location
  function handleLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const locString = `Latitude: ${lat}, Longitude: ${lon}`;
        setForm({ ...form, location: locString });
      },
      () => {
        alert("Unable to detect location.");
      }
    );
  }

  // Save issue to LocalStorage
  function handleSubmit(e) {
    e.preventDefault();

    const existingIssues = JSON.parse(localStorage.getItem("issues")) || [];
    existingIssues.push(form);

    localStorage.setItem("issues", JSON.stringify(existingIssues));

    alert("Issue submitted successfully!");

    // Reset form
    setForm({
      name: "",
      area: "",
      issueType: "",
      description: "",
      photo: "",
      location: "",
      date: new Date().toLocaleDateString(),
    });
  }

  return (
    <div className="page">
      <div className="card">
        <h3>Report a Municipal Issue</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Area / Locality</label>
            <input
              type="text"
              name="area"
              value={form.area}
              onChange={handleChange}
              placeholder="Enter area name"
              required
            />
          </div>

          <div className="form-group">
            <label>Issue Type</label>
            <select
              name="issueType"
              value={form.issueType}
              onChange={handleChange}
              required
            >
              <option value="">Select an Issue</option>
              <option>Garbage</option>
              <option>Road Damage</option>
              <option>Street Light</option>
              <option>Water Leakage</option>
              <option>Gas leakage</option>
              <option>Parking Issue</option>
              <option>Drainage</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the issue..."
              required
            />
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label>Upload Photo</label>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          </div>

          {form.photo && (
            <img
              src={form.photo}
              alt="Preview"
              style={{ width: "100%", marginTop: "10px", borderRadius: "8px" }}
            />
          )}

          {/* Location */}
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={form.location}
              readOnly
              placeholder="Click 'Detect Location'"
            />
            <button
              type="button"
              className="btn"
              style={{ marginTop: "10px" }}
              onClick={handleLocation}
            >
              Detect My Location
            </button>
          </div>

          <button type="submit" className="btn">
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportIssue;
