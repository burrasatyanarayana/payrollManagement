import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <Content />
      </div>
    </div>
  );
}

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button onClick={() => navigate("/employee")}>Employee Details</button>
      <button onClick={() => navigate("/salary")}>Salary</button>
      <button onClick={() => navigate("/leave")}>Leave</button>
    </div>
  );
}

function Topbar() {
  const [showMenu, setShowMenu] = useState(false);
  const username = "Sanjay";

  return (
    <div className="topbar">
      <div
        className="profile-container"
        style={{ marginLeft: "auto", marginRight: "20px" }}
      >
        <FaUserCircle
          size={28}
          onClick={() => setShowMenu(!showMenu)}
          style={{ cursor: "pointer" }}
        />
        {showMenu && (
          <div className="dropdown-menu">
            <p>Hi, {username}</p>
            <button onClick={() => (window.location.href = "/")}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-area">
      <h2>Welcome to Payroll Management System</h2>
      <p>Select a section from the sidebar to continue.</p>
    </div>
  );
}
