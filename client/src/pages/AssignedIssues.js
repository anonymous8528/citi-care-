import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";

function AssignedIssues() {
  const [issues, setIssues] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [statusMap, setStatusMap] = useState({});

  useEffect(() => {
    fetchAssignedIssues();
  }, []);

  const fetchAssignedIssues = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/issues/assigned", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIssues(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateIssue = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.put(
        `/issues/${id}/progress`,
        {
          progress: progressMap[id] || "",
          status: statusMap[id] || "in_progress",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Issue updated successfully");
      fetchAssignedIssues();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Assigned Issues</h2>

        {issues.length === 0 ? (
          <p>No assigned issues.</p>
        ) : (
          issues.map((issue) => (
            <div key={issue._id} className="issue-item">
              <h3>{issue.issueType}</h3>
              <p><strong>Citizen:</strong> {issue.citizen?.name}</p>
              <p><strong>Area:</strong> {issue.area}</p>
              <p><strong>Description:</strong> {issue.description}</p>
              <p><strong>Current Status:</strong> {issue.status}</p>

              <textarea
                placeholder="Enter progress update"
                value={progressMap[issue._id] || ""}
                onChange={(e) =>
                  setProgressMap({
                    ...progressMap,
                    [issue._id]: e.target.value,
                  })
                }
              />

              <select
                value={statusMap[issue._id] || issue.status}
                onChange={(e) =>
                  setStatusMap({
                    ...statusMap,
                    [issue._id]: e.target.value,
                  })
                }
              >
                <option value="assigned">assigned</option>
                <option value="in_progress">in_progress</option>
                <option value="resolved">resolved</option>
                <option value="rejected">rejected</option>
              </select>

              <button onClick={() => updateIssue(issue._id)}>
                Update Issue
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AssignedIssues;