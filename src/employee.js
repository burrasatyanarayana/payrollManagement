import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./employee.css";
import employeeData from "./employeedata";
const App = () => {
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

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      const updatedList = employees.filter((emp) => emp.id !== id);
      setEmployees(updatedList);
    }
  };

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

  const filteredEmployees = employees.filter((emp) =>
    emp.id.toString().includes(searchId)
  );

  return (
    <div className="App">
      <h1>Employee Data</h1>

      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by Employee ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="search-input"
        />

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
                  onClick={() => setEditEmployee(emp)}
                >
                  <FaEdit />
                </button>
                <button
                  className="dots-button delete"
                  title="Delete"
                  onClick={() => deleteEmployee(emp.id)}
                  style={{ marginLeft: "8px", color: "red" }}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editEmployee && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Employee</h2>

            <input
              type="text"
              value={editEmployee.name}
              onChange={(e) => handleEditChange("name", e.target.value)}
              placeholder="Name"
            />
            <input
              type="email"
              value={editEmployee.email}
              onChange={(e) => handleEditChange("email", e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              value={editEmployee.role}
              onChange={(e) => handleEditChange("role", e.target.value)}
              placeholder="Role"
            />
            <input
              type="number"
              value={editEmployee.salary}
              onChange={(e) => handleEditChange("salary", e.target.value)}
              placeholder="Salary"
            />
            <input
              type="number"
              value={editEmployee.joiningYear}
              onChange={(e) => handleEditChange("joiningYear", e.target.value)}
              placeholder="Joining Year"
            />

            <div className="modal-buttons">
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditEmployee(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* New Employee Modal */}
      {newEmployeeModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Employee</h2>

            <input
              type="number"
              value={newEmployee.id}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, id: e.target.value })
              }
              placeholder="Employee ID"
            />
            <input
              type="text"
              value={newEmployee.name}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, name: e.target.value })
              }
              placeholder="Name"
            />
            <input
              type="email"
              value={newEmployee.email}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, email: e.target.value })
              }
              placeholder="Email"
            />
            <input
              type="text"
              value={newEmployee.role}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, role: e.target.value })
              }
              placeholder="Role"
            />
            <input
              type="number"
              value={newEmployee.salary}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, salary: e.target.value })
              }
              placeholder="Salary"
            />
            <input
              type="number"
              value={newEmployee.joiningYear}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  joiningYear: e.target.value,
                })
              }
              placeholder="Joining Year"
            />

            <div className="modal-buttons">
              <button onClick={handleAddEmployee}>Add</button>
              <button onClick={() => setNewEmployeeModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
