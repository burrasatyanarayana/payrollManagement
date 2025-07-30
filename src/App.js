import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Home"; // login page
import Dashboard from "./dashboard";
import Salary from "./salary";
import Employee from "./employee";
// Add your other imports like Leave, Employee, etc.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/employee" element={<Employee />} /> */
        {/* <Route path="/leave" element={<Leave />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
