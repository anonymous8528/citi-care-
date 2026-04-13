import React, { useState } from "react";
import API from "../api/axiosInstance";


function Signup() {
  const [form, setForm] = useState({
     name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);
      alert("Signup successful ✅");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={signup} style={styles.card}>
        <h2>Signup</h2>

        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "25px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  }
};

export default Signup;

/*
function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
const signup = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Signup successful");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h3>Create an Account</h3>

        <form onSubmit={signup}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text"
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={setForm}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={setForm}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password"
              name="password"
              placeholder="Create password"
              value={form.password}
              onChange={setForm}
              required
            />
          </div>

          <button className="btn">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
*/