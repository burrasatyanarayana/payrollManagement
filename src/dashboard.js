import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Salary from "./salary";
import Emp from "./employee";
// import Leave from "./leave"; // Uncomment when ready
import "./dashboard.css";
import LeaveHistory from "./leaveHistory";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("employee");

  return (
    <div className="dashboard">
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content">
        <Topbar />
        <Content activePage={activePage} />
      </div>
    </div>
  );
}

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <button onClick={() => setActivePage("employee")}>
        Employee Details
      </button>
      <button onClick={() => setActivePage("salary")}>Salary</button>
      <button onClick={() => setActivePage("leave")}>Leave</button>
    </div>
  );
}

function Topbar() {
  const [showMenu, setShowMenu] = useState(false);
  const username = "Sanjay";

  return (
    <div className="topbar">
      <div className="center-heading">
        <h1>PayRollManagement</h1>
      </div>
      <div className="profile-container">
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

function Content({ activePage }) {
  return (
    <div className="content-area">
      {activePage === "employee" && <Emp />}
      {activePage === "salary" && <Salary />}
      {activePage === "leave" && <LeaveHistory />}
    </div>
  );
}
