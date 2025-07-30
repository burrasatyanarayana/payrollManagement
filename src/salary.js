import React, { useState } from "react";
import "./salary.css";

export default function Salary() {
  const [result, setResult] = useState(null);

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="salary-container">
      <h2>Salary Calculator</h2>
      <SalaryForm onCalculate={setResult} onReset={handleReset} />
      <SalaryResult result={result} />
    </div>
  );
}

function SalaryForm({ onCalculate, onReset }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [basic, setBasic] = useState("");
  const [joinYear, setJoinYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();
    const experience = currentYear - parseInt(joinYear);

    const increments = {
      Trainee: 1000,
      Developer: 2000,
      Tester: 2500,
      Manager: 3000,
    };

    const increment = increments[role] || 0;
    const totalSalary = parseInt(basic) + experience * increment;

    const data = {
      name,
      role,
      basic: parseInt(basic),
      joinYear: parseInt(joinYear),
      experience,
      totalSalary,
    };

    onCalculate(data);
  };

  const handleReset = () => {
    setName("");
    setRole("");
    setBasic("");
    setJoinYear("");
    onReset();
  };

  return (
    <form className="salary-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={role}
        required
        onChange={(e) => setRole(e.target.value)}
        className="role-select"
      >
        <option value="">Select Role</option>
        <option value="Trainee">Trainee</option>
        <option value="Developer">Developer</option>
        <option value="Tester">Tester</option>
        <option value="Manager">Manager</option>
      </select>

      <input
        type="number"
        placeholder="Basic Salary"
        value={basic}
        required
        onChange={(e) => setBasic(e.target.value)}
      />

      <input
        type="number"
        placeholder="Joining Year"
        value={joinYear}
        required
        min="2000"
        max={new Date().getFullYear()}
        onChange={(e) => setJoinYear(e.target.value)}
      />

      <button type="submit">Calculate Salary</button>
      <button type="button" onClick={handleReset}>
        Refresh
      </button>
    </form>
  );
}

function SalaryResult({ result }) {
  if (!result) return null;

  return (
    <div className="salary-result">
      <h3>Salary Details</h3>
      <p>
        <h3>Name:</h3> {result.name}
      </p>
      <p>
        <h3>Role:</h3> {result.role}
      </p>
      <p>
        <h3>Experience:</h3> {result.experience} years
      </p>
      <p>
        <h3>Total Salary:</h3> ₹{result.totalSalary}
      </p>
    </div>
  );
}
