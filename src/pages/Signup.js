import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSignup(e) {
    e.preventDefault();
    alert("Signup Successful!");
    setForm({ name: "", email: "", password: "" });
  }

  return (
    <div className="page">
      <div className="card">
        <h3>Create an Account</h3>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text"
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
