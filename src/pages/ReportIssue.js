import React, { useState } from "react";
import API from "../api/axiosInstance";

function ReportIssue() {
  const [form, setForm] = useState({
    name: "",
    area: "",
    issueType: "",
    description: "",
    date: new Date().toLocaleDateString(),
    location: "",
  });

  const [file, setFile] = useState(null);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handlePhotoUpload(e) {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  }

  function handleLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported on this device");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const latitude = String(pos.coords.latitude);
        const longitude = String(pos.coords.longitude);

        setLat(latitude);
        setLng(longitude);

        setForm((prev) => ({
          ...prev,
          location: `${latitude}, ${longitude}`,
        }));
      },
      (error) => {
        console.log("Location error:", error);
        alert("Unable to fetch location ");
      }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.area || !form.issueType || !form.description) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("area", form.area);
      formData.append("issueType", form.issueType);
      formData.append("description", form.description);
      formData.append("date", form.date);
      formData.append("location", form.location);
      formData.append("lat", lat);
      formData.append("lng", lng);

      if (file) {
        formData.append("file", file);
      }

      const response = await API.post("/issues", formData, {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      console.log("Issue submit response:", response.data);
      alert("Issue submitted successfully ");

      setForm({
        name: "",
        area: "",
        issueType: "",
        description: "",
        date: new Date().toLocaleDateString(),
        location: "",
      });
      setFile(null);
      setFileName("");
      setLat("");
      setLng("");
    } catch (error) {
      console.log("Submit issue error:", error);
      console.log("Server response:", error.response?.data);
      alert(error.response?.data?.message || "Error submitting issue ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="report-page">
      <div className="report-wrapper">
        <div className="report-card">
          <div className="report-header">
            <span className="report-badge">CitiCare • Smart Complaint Desk</span>
            <h2>Report a Municipal Issue</h2>
            <p>
              Help improve your area by reporting public problems quickly, accurately,
              and with complete details.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="report-form">
            <div className="form-grid">
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
                <option value="Garbage">Garbage</option>
                <option value="Road Damage">Road Damage</option>
                <option value="Street Light">Street Light</option>
                <option value="Water Leakage">Water Leakage</option>
                <option value="Drainage">Drainage</option>
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

            <div className="form-group">
              <label>Upload Photo</label>
              <div className="upload-box">
                <input type="file" name="file" onChange={handlePhotoUpload} />
                <span>{fileName || "Choose an image file"}</span>
              </div>
            </div>

            <div className="form-group">
              <label>Location</label>
              <div className="location-row">
                <button
                  type="button"
                  className="location-btn"
                  onClick={handleLocation}
                >
                  Get Location
                </button>
                <div className="location-output">
                  {form.location || "Location not selected yet"}
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Issue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReportIssue;