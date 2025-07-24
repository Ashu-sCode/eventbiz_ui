import React, { useContext, useState } from "react";
import "./Showdata.css";
import { Context } from "../../ContextProvider/ContextProvider";

const Showdata = () => {
  const { events, setEvents } = useContext(Context);
  const { studentsList, setStudentsList } = useContext(Context);
  const { registerdata, setRegisterdata } = useContext(Context);

  // 💡 List of available branches for dropdown
  const branches = [
    "Mechanical",
    "Civil",
    "Electrical",
    "AI/ML",
    "Computer science",
    "Information Technology",
  ];

  // ✅ New states to store selected filters
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  // ✅ Filtering registerdata array based on branch and event filters
  const filteredData = registerdata.filter((details) => {
    return (
      (selectedBranch === "" ||
        details.branch.toLowerCase() === selectedBranch.toLowerCase()) &&
      (selectedEvent === "" ||
        details.event.toLowerCase() === selectedEvent.toLowerCase())
    );
  });

  console.log("REGISTER DATA:", registerdata);
  console.log("Selected Branch:", selectedBranch);
  console.log("Selected Event:", selectedEvent);

  return (
    <div style={{ padding: "10px 20px" }}>
      <h4>Students that are registered for the events</h4>

      {/* ✅ Dropdowns for filtering */}
      <div className="data_main">
        <div>
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">All Branches</option>
            {branches.map((branch, i) => (
              <option key={i} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="">All Events</option>
            {events.map((eve, i) => (
              <option key={i} value={eve.name}>
                {eve.name}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ Reset Button to clear filters */}
        <div>
          <button
            onClick={() => {
              setSelectedBranch("");
              setSelectedEvent("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* ✅ Table for showing filtered student registrations */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Roll number</th>
              <th>Branch</th>
              <th>Email ID</th>
              <th>Event Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((details, i) => (
                <tr key={i}>
                  <td>{details.roll_no}</td>
                  <td>{details.branch}</td>
                  <td>{details.email}</td>
                  <td>{details.event}</td>
                </tr>
              ))
            ) : (
              // ✅ Shown if no match is found
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showdata;
