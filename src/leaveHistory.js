import React, { useState, useEffect } from "react";
import leaveRequestsData from "./leavedata";
import "./leavehistory.css";

const MAX_LEAVES = 20;

const LeaveHistory = () => {
  const [searchId, setSearchId] = useState("");
  const [leaveRequests, setLeaveRequests] = useState(leaveRequestsData);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [newLeave, setNewLeave] = useState({ date: "", reason: "", days: "" });

  useEffect(() => {
    const result = leaveRequests.filter(
      (leave) => leave.empId.toString() === searchId
    );
    setFilteredLeaves(result);
  }, [searchId, leaveRequests]);

  const totalLeaves = filteredLeaves.reduce(
    (total, leave) => total + leave.days,
    0
  );

  const handleAddLeave = () => {
    const { date, reason, days } = newLeave;
    const daysNum = parseInt(days);

    if (!date || !reason || !days) {
      alert("Please fill all fields.");
      return;
    }

    if (totalLeaves + daysNum > MAX_LEAVES) {
      alert("Cannot exceed total leave limit of 20 days.");
      return;
    }

    const updatedLeaves = [
      ...leaveRequests,
      {
        empId: parseInt(searchId),
        date,
        reason,
        days: daysNum,
      },
    ];

    setLeaveRequests(updatedLeaves);
    setNewLeave({ date: "", reason: "", days: "" });
  };

  const willExceedLimit =
    parseInt(newLeave.days) + totalLeaves > MAX_LEAVES ||
    totalLeaves >= MAX_LEAVES;

  return (
    <div className="leave-container">
      <h2>Employee Leave History</h2>

      <input
        type="text"
        placeholder="Search by Employee ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        className="search-input"
      />

      {filteredLeaves.length > 0 ? (
        <>
          <table className="leave-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reason</th>
                <th>Days</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.date}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.days}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>Total Leaves Taken: {totalLeaves}</p>

          <div className="add-leave-form">
            <h3>Add Leave</h3>
            <input
              type="date"
              value={newLeave.date}
              onChange={(e) =>
                setNewLeave({ ...newLeave, date: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Reason"
              value={newLeave.reason}
              onChange={(e) =>
                setNewLeave({ ...newLeave, reason: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Number of Days"
              value={newLeave.days}
              onChange={(e) =>
                setNewLeave({ ...newLeave, days: e.target.value })
              }
              min="1"
            />
            <button onClick={handleAddLeave} disabled={willExceedLimit}>
              Add Leave
            </button>
            {willExceedLimit && (
              <p style={{ color: "red" }}>
                Leave limit exceeded! Max allowed: {MAX_LEAVES}
              </p>
            )}
          </div>
        </>
      ) : (
        searchId && <p>No leave history found for this ID.</p>
      )}
    </div>
  );
};

export default LeaveHistory;
