import React, { useEffect, useState } from "react";

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const savedIssues = JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(savedIssues);
  }, []);

  return (
    <div className="page">
      <h3>Reported Issues</h3>

      {issues.length === 0 ? (
        <p>No issues reported yet.</p>
      ) : (
        issues.map((issue, index) => (
          <div className="issue-item" key={index}>
            <div className="issue-title">{issue.issueType}</div>

            <div className="issue-info">Name: {issue.name}</div>
            <div className="issue-info">Area: {issue.area}</div>
            <div className="issue-info">Date: {issue.date}</div>
            <div className="issue-info">Description: {issue.description}</div>

            {issue.location && (
              <div className="issue-info">Location: {issue.location}</div>
            )}

            {issue.photo && (
              <img
                src={issue.photo}
                alt="Uploaded"
                style={{
                  width: "30%",
                  marginTop: "10px",
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default IssueList;
