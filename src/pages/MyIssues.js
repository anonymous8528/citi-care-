import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";

function MyIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchMyIssues();
  }, []);

  const fetchMyIssues = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/issues/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIssues(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>My Issues</h2>

        {issues.length === 0 ? (
          <p>No issues found.</p>
        ) : (
          issues.map((issue) => (
            <div key={issue._id} className="issue-item">
              <h3>{issue.issueType}</h3>
              <p><strong>Area:</strong> {issue.area}</p>
              <p><strong>Description:</strong> {issue.description}</p>
              <p><strong>Status:</strong> {issue.status}</p>
              <p><strong>Progress:</strong> {issue.progress || "No update yet"}</p>
              <p>
                <strong>Officer:</strong>{" "}
                {issue.assignedOfficer ? issue.assignedOfficer.name : "Not assigned"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyIssues;