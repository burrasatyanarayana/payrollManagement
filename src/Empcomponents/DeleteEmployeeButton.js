import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteEmployeeButton = ({ empId, onDelete }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      onDelete(empId);
    }
  };

  return (
    <button
      className="dots-button delete"
      title="Delete"
      onClick={handleDelete}
      style={{ marginLeft: "8px", color: "red" }}
    >
      <FaTrash />
    </button>
  );
};

export default DeleteEmployeeButton;
