import React from "react";

const AddEmployeeModal = ({
  newEmployee,
  setNewEmployee,
  handleAddEmployee,
  onClose,
}) => {
  return (
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
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
