import React, { useState } from "react";
import employeeData from "./employeedata";
import "./salary.css";

const Salary = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [bonus, setBonus] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const emp = employeeData.find((e) => e.id === Number(employeeId));

    if (!emp) {
      setError("Employee not found");
      setEmployeeDetails(null);
      return;
    }

    setError("");
    const currentYear = new Date().getFullYear();
    const yearsWorked = currentYear - emp.joiningYear;
    const increment = emp.salary * 0.05 * yearsWorked;
    const totalSalary = emp.salary + increment + (bonus ? Number(bonus) : 0);

    setEmployeeDetails({ ...emp, yearsWorked, increment, totalSalary });
  };

  return (
    <div className="salary-container">
      <h2>Salary Calculator</h2>
      <div className="form">
        <input
          type="number"
          placeholder="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Bonus (optional)"
          value={bonus}
          onChange={(e) => setBonus(e.target.value)}
        />
        <button onClick={handleCalculate}>Calculate Salary</button>
      </div>

      {error && <p className="error">{error}</p>}

      {employeeDetails && (
        <div className="result">
          <h3>Employee Salary Details</h3>
          <p>
            <strong>Name:</strong> {employeeDetails.name}
          </p>
          <p>
            <strong>Role:</strong> {employeeDetails.role}
          </p>
          <p>
            <strong>Joining Year:</strong> {employeeDetails.joiningYear}
          </p>
          <p>
            <strong>Base Salary:</strong> ₹{employeeDetails.salary}
          </p>
          <p>
            <strong>Years Worked:</strong> {employeeDetails.yearsWorked}
          </p>
          <p>
            <strong>Increment:</strong> ₹{employeeDetails.increment}
          </p>
          <p>
            <strong>Bonus:</strong> ₹{bonus || 0}
          </p>
          <p>
            <strong>Total Salary:</strong> ₹{employeeDetails.totalSalary}
          </p>
        </div>
      )}
    </div>
  );
};

export default Salary;
