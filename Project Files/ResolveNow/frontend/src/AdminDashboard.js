import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
const [complaints, setComplaints] = useState([]);

useEffect(() => {
fetchAllComplaints();
}, []);

const fetchAllComplaints = async () => {
const res = await axios.get("[http://localhost:5000/api/complaints](http://localhost:5000/api/complaints)");
setComplaints(res.data);
};

const updateStatus = async (id, status) => {
await axios.put(`http://localhost:5000/api/complaints/${id}`, {
status,
});


fetchAllComplaints();


};

return (
<div style={{ padding: "40px" }}> <h1>Admin Dashboard 🚀</h1>


  {complaints.map((c) => (
    <div
      key={c._id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{c.title}</h3>
      <p>{c.description}</p>
      <p>Status: {c.status}</p>

      <button onClick={() => updateStatus(c._id, "Resolved")}>
        Mark Resolved
      </button>
    </div>
  ))}
</div>


);
}

export default AdminDashboard;
