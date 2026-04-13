import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";

function AllIssues() {
  const [issues, setIssues] = useState([]);
  const [officers, setOfficers] = useState([]);
  const [selectedOfficer, setSelectedOfficer] = useState({});

  useEffect(() => {
    fetchAllIssues();
    fetchUsers();
  }, []);

  const fetchAllIssues = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/issues", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIssues(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOfficers(res.data.filter((user) => user.role === "officer"));
    } catch (error) {
      console.log(error);
    }
  };

  const assignOfficer = async (issueId) => {
    try {
      const token = localStorage.getItem("token");
      await API.put(
        `/issues/${issueId}/assign`,
        { officerId: selectedOfficer[issueId] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Officer assigned successfully");
      fetchAllIssues();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>All Issues</h2>

        {issues.map((issue) => (
          <div key={issue._id} className="issue-item">
            <h3>{issue.issueType}</h3>
            <p><strong>Citizen:</strong> {issue.citizen?.name}</p>
            <p><strong>Status:</strong> {issue.status}</p>
            <p><strong>Progress:</strong> {issue.progress || "No update yet"}</p>

            <select
              value={selectedOfficer[issue._id] || ""}
              onChange={(e) =>
                setSelectedOfficer({
                  ...selectedOfficer,
                  [issue._id]: e.target.value,
                })
              }
            >
              <option value="">Select Officer</option>
              {officers.map((officer) => (
                <option key={officer._id} value={officer._id}>
                  {officer.name}
                </option>
              ))}
            </select>

            <button onClick={() => assignOfficer(issue._id)}>
              Assign Officer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllIssues;