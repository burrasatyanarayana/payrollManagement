import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Anil Kumar",
      email: "anil.kumar@example.com",
      salary: 70000,
      role: "Manager",
      joiningYear: 2019,
    },
    {
      id: 2,
      name: "Divya Reddy",
      email: "divya.reddy@example.com",
      salary: 50000,
      role: "Developer",
      joiningYear: 2020,
    },
    {
      id: 3,
      name: "Ravi Teja",
      email: "ravi.teja@example.com",
      salary: 45000,
      role: "Tester",
      joiningYear: 2021,
    },
    {
      id: 4,
      name: "Suma Rao",
      email: "suma.rao@example.com",
      salary: 52000,
      role: "Developer",
      joiningYear: 2020,
    },
    {
      id: 5,
      name: "Pavan Sai",
      email: "pavan.sai@example.com",
      salary: 30000,
      role: "Trainee",
      joiningYear: 2023,
    },
    {
      id: 6,
      name: "Meena Shah",
      email: "meena.shah@example.com",
      salary: 46000,
      role: "Tester",
      joiningYear: 2021,
    },
    {
      id: 7,
      name: "Karthik Reddy",
      email: "karthik.reddy@example.com",
      salary: 72000,
      role: "Manager",
      joiningYear: 2018,
    },
    {
      id: 8,
      name: "Sneha Iyer",
      email: "sneha.iyer@example.com",
      salary: 51000,
      role: "Developer",
      joiningYear: 2020,
    },
    {
      id: 9,
      name: "Abhinav Singh",
      email: "abhinav.singh@example.com",
      salary: 47000,
      role: "Tester",
      joiningYear: 2021,
    },
    {
      id: 10,
      name: "Lakshmi Devi",
      email: "lakshmi.devi@example.com",
      salary: 29000,
      role: "Trainee",
      joiningYear: 2023,
    },
    {
      id: 11,
      name: "Naveen Patil",
      email: "naveen.patil@example.com",
      salary: 68000,
      role: "Manager",
      joiningYear: 2019,
    },
    {
      id: 12,
      name: "Geetha Ram",
      email: "geetha.ram@example.com",
      salary: 53000,
      role: "Developer",
      joiningYear: 2020,
    },
    {
      id: 13,
      name: "Ajay Kumar",
      email: "ajay.kumar@example.com",
      salary: 44000,
      role: "Tester",
      joiningYear: 2021,
    },
    {
      id: 14,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      salary: 50000,
      role: "Developer",
      joiningYear: 2022,
    },
    {
      id: 15,
      name: "Rakesh Nair",
      email: "rakesh.nair@example.com",
      salary: 27000,
      role: "Trainee",
      joiningYear: 2023,
    },
    {
      id: 16,
      name: "Tanvi Joshi",
      email: "tanvi.joshi@example.com",
      salary: 48000,
      role: "Tester",
      joiningYear: 2021,
    },
    {
      id: 17,
      name: "Sandeep Rao",
      email: "sandeep.rao@example.com",
      salary: 75000,
      role: "Manager",
      joiningYear: 2018,
    },
    {
      id: 18,
      name: "Neha Verma",
      email: "neha.verma@example.com",
      salary: 55000,
      role: "Developer",
      joiningYear: 2022,
    },
    {
      id: 19,
      name: "Vikram Shetty",
      email: "vikram.shetty@example.com",
      salary: 46000,
      role: "Tester",
      joiningYear: 2021,
    },
    {
      id: 20,
      name: "Shreya Rao",
      email: "shreya.rao@example.com",
      salary: 31000,
      role: "Trainee",
      joiningYear: 2023,
    },
  ]);

  // Input for search bar
  const [searchId, setSearchId] = useState("");

  // For editing employee
  const [editEmployee, setEditEmployee] = useState(null);

  // For new employee modal visibility
  const [newEmployeeModal, setNewEmployeeModal] = useState(false);

  // For storing new employee input
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    email: "",
    salary: "",
    joiningYear: "",
  });

  // Handle changes in edit form fields
  const handleEditChange = (field, value) => {
    setEditEmployee({ ...editEmployee, [field]: value });
  };

  // Save edited employee details
  const saveEdit = () => {
    const updatedList = employees.map((emp) =>
      emp.id === editEmployee.id ? editEmployee : emp
    );
    setEmployees(updatedList);
    setEditEmployee(null); // close modal
  };

  // Handle adding a new employee
  const handleAddEmployee = () => {
    if (
      !newEmployee.id ||
      !newEmployee.name ||
      !newEmployee.email ||
      !newEmployee.salary ||
      !newEmployee.joiningYear
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // Check if employee ID already exists
    const alreadyExists = employees.find(
      (emp) => emp.id === Number(newEmployee.id)
    );
    if (alreadyExists) {
      alert("Employee with this ID already exists.");
      return;
    }

    // Add new employee to list
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
      salary: "",
      joiningYear: "",
    });
  };

  // Filter employees by ID
  const filteredEmployees = employees.filter((emp) =>
    emp.id.toString().includes(searchId)
  );
  return (
    <div className="App">
      <h1>Employee Data</h1>

      {/* Top Bar */}
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

      {/* Employee Table */}
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
                {/* Edit Button with Tooltip */}
                <button
                  className="dots-button"
                  title="Edit"
                  onClick={() => setEditEmployee(emp)}
                >
                  ⋮
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Employee Modal */}
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
