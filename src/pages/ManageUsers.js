import React, { useEffect, useState } from "react";
import API from "../api/axiosInstance";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeRole = async (userId, role) => {
    try {
      const token = localStorage.getItem("token");
      await API.put(
        `/users/${userId}/role`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Role updated successfully");
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Manage Users</h2>

        {users.map((user) => (
          <div key={user._id} className="issue-item">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Current Role:</strong> {user.role}</p>

            <select
              defaultValue={user.role}
              onChange={(e) => changeRole(user._id, e.target.value)}
            >
              <option value="citizen">citizen</option>
              <option value="officer">officer</option>
              <option value="admin">admin</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUsers;