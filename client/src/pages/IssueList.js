import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";

function IssueList() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIssues();
  }, []);

  async function fetchIssues() {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/issues", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Fetched issues:", res.data);
      setIssues(res.data);
    } catch (error) {
      console.log("Issue list error:", error);
      console.log("Issue list response:", error.response?.data);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "30px" }}>Loading...</h2>;
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Reported Issues</h2>

        {issues.length === 0 ? (
          <p>No issues found.</p>
        ) : (
          <div className="issue-list">
            {issues.map((issue) => (
              <div key={issue._id} className="issue-item">
                <h3>{issue.issueType}</h3>
                <p><strong>Name:</strong> {issue.name}</p>
                <p><strong>Area:</strong> {issue.area}</p>
                <p><strong>Description:</strong> {issue.description}</p>
                <p><strong>Date:</strong> {issue.date}</p>
                <p>
                  <strong>Location:</strong>{" "}
                  {issue.location?.lat && issue.location?.lng
                    ? `${issue.location.lat}, ${issue.location.lng}`
                    : "Not provided"}
                </p>

                {issue.photo && (
                  <img
                    src={issue.photo}
                    alt="Issue"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default IssueList;