import React from "react";

const EditEmployeeModal = ({
  editEmployee,
  handleEditChange,
  saveEdit,
  onCancel,
}) => {
  return (
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
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
