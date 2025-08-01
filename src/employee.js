import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
// App.js
import "./employee.css";

import employeeData from "./employeedata";

// Custom components
import SearchBar from "./Empcomponents/SearchBar";
import AddEmployeeModal from "./Empcomponents/AddEmployeeModal";
import EditEmployeeModal from "./Empcomponents/EditEmployeeModal";
import DeleteEmployeeButton from "./Empcomponents/DeleteEmployeeButton";

const Emp = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [searchId, setSearchId] = useState("");
  const [editEmployee, setEditEmployee] = useState(null);
  const [newEmployeeModal, setNewEmployeeModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
    salary: "",
    joiningYear: "",
  });

  // 🔁 Edit handlers
  const handleEditChange = (field, value) => {
    setEditEmployee({ ...editEmployee, [field]: value });
  };

  const saveEdit = () => {
    const updatedList = employees.map((emp) =>
      emp.id === editEmployee.id ? editEmployee : emp
    );
    setEmployees(updatedList);
    setEditEmployee(null);
  };

  // for Deleting
  const deleteEmployee = (id) => {
    const updatedList = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedList);
  };

  // to add a new employee
  const handleAddEmployee = () => {
    if (
      !newEmployee.id ||
      !newEmployee.name ||
      !newEmployee.email ||
      !newEmployee.salary ||
      !newEmployee.joiningYear ||
      !newEmployee.role
    ) {
      alert("Please fill all the fields.");
      return;
    }

    const alreadyExists = employees.find(
      (emp) => emp.id === Number(newEmployee.id)
    );
    if (alreadyExists) {
      alert("Employee with this ID already exists.");
      return;
    }

    const updatedList = [
      ...employees,
      {
        ...newEmployee,
        id: Number(newEmployee.id),
        salary: Number(newEmployee.salary),
        joiningYear: Number(newEmployee.joiningYear),
      },
    ];

    setEmployees(updatedList);
    setNewEmployeeModal(false);
    setNewEmployee({
      id: "",
      name: "",
      email: "",
      role: "",
      salary: "",
      joiningYear: "",
    });
  };

  // filtering data
  const filteredEmployees = employees.filter((emp) =>
    emp.id.toString().includes(searchId)
  );

  return (
    <div className="App">
      <h1>Employee Data</h1>

      <div className="top-bar">
        <SearchBar searchId={searchId} setSearchId={setSearchId} />
        <button
          className="add-button"
          onClick={() => setNewEmployeeModal(true)}
        >
          + New Employee
        </button>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Salary (₹)</th>
            <th>Joining Year</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td>{emp.salary}</td>
              <td>{emp.joiningYear}</td>
              <td>
                <button
                  className="dots-button"
                  title="Edit"
                  onClick={() => setEditEmployee(emp)} // editing employee
                >
                  <FaEdit />
                </button>
                <DeleteEmployeeButton //deleting emp component
                  empId={emp.id}
                  onDelete={deleteEmployee}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* emp editing */}
      {editEmployee && (
        <EditEmployeeModal
          editEmployee={editEmployee}
          handleEditChange={handleEditChange}
          saveEdit={saveEdit}
          onCancel={() => setEditEmployee(null)}
        />
      )}

      {/* New Employee adding */}
      {newEmployeeModal && (
        <AddEmployeeModal
          newEmployee={newEmployee}
          setNewEmployee={setNewEmployee}
          handleAddEmployee={handleAddEmployee}
          onClose={() => setNewEmployeeModal(false)}
        />
      )}
    </div>
  );
};

export default Emp;
