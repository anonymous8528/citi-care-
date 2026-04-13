import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReportIssue from "./pages/ReportIssue";
import MyIssues from "./pages/MyIssues";
import AssignedIssues from "./pages/AssignedIssues";
import ManageUsers from "./pages/ManageUsers";
import AllIssues from "./pages/AllIssues";

function App() {
  return (
    <BrowserRouter basename="/citi-care-">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/my-issues" element={<MyIssues />} />
        <Route path="/assigned-issues" element={<AssignedIssues />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/all-issues" element={<AllIssues />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;