
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// function Admin() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user") || "null");

//   const [complaints, setComplaints] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   // 📊 Chart data
//   const chartData = [
//     {
//       name: "Pending",
//       value: complaints.filter(c => c.status === "Pending").length,
//     },
//     {
//       name: "In Progress",
//       value: complaints.filter(c => c.status === "In Progress").length,
//     },
//     {
//       name: "Resolved",
//       value: complaints.filter(c => c.status === "Resolved").length,
//     },
//   ];

//   const COLORS = ["#ff9800", "#2196f3", "#4caf50"];

//   // 🔒 Protect admin page
//   useEffect(() => {
//     if (!user || user.email !== "admin@resolve72.com") {
//       alert("Access denied. Admin only.");
//       navigate("/login");
//       return;
//     }

//     fetchAllComplaints();
//   }, []);

//   // ✅ Fetch complaints
//   const fetchAllComplaints = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/complaints/all"
//       );
//       setComplaints(res.data);
//     } catch {
//       alert("Error loading complaints");
//     }
//   };

//   // ✅ Update status
//   const updateStatus = async (id, status) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/complaints/${id}/status`,
//         { status }
//       );
//       fetchAllComplaints();
//     } catch {
//       alert("Failed to update status");
//     }
//   };

//   // ✅ Delete complaint
//   const deleteComplaint = async (id) => {
//     if (!window.confirm("Delete this complaint?")) return;

//     try {
//       await axios.delete(
//         `http://localhost:5000/api/complaints/${id}`
//       );
//       fetchAllComplaints();
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert("Failed to delete complaint");
//     }
//   };

//   // ✅ Logout
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   // 🔍 Search + Filter logic
//   const filteredComplaints = complaints.filter((c) => {
//     const matchesSearch =
//       c.title.toLowerCase().includes(search.toLowerCase()) ||
//       c.description.toLowerCase().includes(search.toLowerCase()) ||
//       c.userId?.name?.toLowerCase().includes(search.toLowerCase());

//     const matchesFilter =
//       filter === "All" || c.status === filter;

//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div style={styles.container}>

//       {/* Header */}
//       <div style={styles.header}>
//         <h1>Admin Dashboard 🚀</h1>
//         <button style={styles.logout} onClick={handleLogout}>
//           Logout
//         </button>
//       </div>

//       {/* 📊 Summary Cards */}
//       <div style={styles.summaryContainer}>
//         <div style={styles.summaryCard}>
//           <h3>Total</h3>
//           <p>{complaints.length}</p>
//         </div>

//         <div style={styles.summaryCard}>
//           <h3>Pending</h3>
//           <p>
//             {complaints.filter(c => c.status === "Pending").length}
//           </p>
//         </div>

//         <div style={styles.summaryCard}>
//           <h3>Resolved</h3>
//           <p>
//             {complaints.filter(c => c.status === "Resolved").length}
//           </p>
//         </div>
//       </div>

//       {/* 📊 Chart Section */}
//       <div style={styles.chartCard}>
//         <h3>Complaint Status Overview</h3>

//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={chartData}
//               cx="50%"
//               cy="50%"
//               label
//               outerRadius={100}
//               dataKey="value"
//             >
//               {chartData.map((entry, index) => (
//                 <Cell
//                   key={index}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>

//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* 🔍 Search + Filter */}
//       <div style={styles.controls}>
//         <input
//           style={styles.search}
//           placeholder="Search complaints..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           style={styles.filter}
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option>All</option>
//           <option>Pending</option>
//           <option>In Progress</option>
//           <option>Resolved</option>
//         </select>
//       </div>

//       {/* 📋 Table */}
//       <div style={styles.card}>
//         {filteredComplaints.length === 0 ? (
//           <p>No complaints found.</p>
//         ) : (
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>User</th>
//                 <th>Email</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Status</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredComplaints.map((c) => (
//                 <tr key={c._id}>
//                   <td>{c.userId?.name}</td>
//                   <td>{c.userId?.email}</td>
//                   <td>{c.title}</td>
//                   <td>{c.description}</td>

//                   <td>
//                     <select
//                       value={c.status}
//                       onChange={(e) =>
//                         updateStatus(c._id, e.target.value)
//                       }
//                     >
//                       <option>Pending</option>
//                       <option>In Progress</option>
//                       <option>Resolved</option>
//                     </select>
//                   </td>

//                   <td>
//                     <button
//                       style={styles.deleteBtn}
//                       onClick={() => deleteComplaint(c._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//     </div>
//   );
// }

// // 🎨 Styling
// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "Arial",
//     background: "#f4f6f9",
//     minHeight: "100vh",
//   },

//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   logout: {
//     padding: "8px 15px",
//     background: "#ff4d4f",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//   },

//   summaryContainer: {
//     display: "flex",
//     gap: "20px",
//     margin: "20px 0",
//   },

//   summaryCard: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     flex: 1,
//     textAlign: "center",
//   },

//   chartCard: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     marginBottom: "20px",
//   },

//   controls: {
//     display: "flex",
//     gap: "10px",
//     margin: "20px 0",
//   },

//   search: {
//     padding: "8px",
//     width: "250px",
//   },

//   filter: {
//     padding: "8px",
//   },

//   card: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },

//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },

//   deleteBtn: {
//     background: "#ff4d4f",
//     color: "white",
//     border: "none",
//     padding: "5px 10px",
//     cursor: "pointer",
//   },
// };

// export default Admin;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Admin() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const chartData = [
    { name: "Pending", value: complaints.filter(c => c.status === "Pending").length },
    { name: "In Progress", value: complaints.filter(c => c.status === "In Progress").length },
    { name: "Resolved", value: complaints.filter(c => c.status === "Resolved").length },
  ];

  const COLORS = ["#ffb74d", "#64b5f6", "#81c784"];

  useEffect(() => {
    if (!user || user.email !== "admin@resolve72.com") {
      alert("Access denied. Admin only.");
      navigate("/login");
      return;
    }

    fetchAllComplaints();
  }, []);

  const fetchAllComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints/all");
      setComplaints(res.data);
    } catch {
      alert("Error loading complaints");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}/status`, { status });
      fetchAllComplaints();
    } catch {
      alert("Failed to update status");
    }
  };

  const deleteComplaint = async (id) => {
    if (!window.confirm("Delete this complaint?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/complaints/${id}`);
      fetchAllComplaints();
    } catch {
      alert("Failed to delete complaint");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const filteredComplaints = complaints.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.userId?.name?.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || c.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <h1>ResolveNow Admin Dashboard</h1>
        <button style={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Summary Cards */}
      <div style={styles.summaryContainer}>
        <Card title="Total" value={complaints.length} />
        <Card title="Pending" value={chartData[0].value} />
        <Card title="Resolved" value={chartData[2].value} />
      </div>

      {/* Chart */}
      <div style={styles.card}>
        <h3>Complaint Overview</h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie data={chartData} outerRadius={100} dataKey="value" label>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Search + Filter */}
      <div style={styles.controls}>
        <input
          style={styles.input}
          placeholder="Search complaints..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          style={styles.input}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      {/* Table */}
      <div style={styles.card}>
        {filteredComplaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {filteredComplaints.map((c) => (
                <tr key={c._id}>
                  <td>{c.userId?.name}</td>
                  <td>{c.userId?.email}</td>
                  <td>{c.title}</td>
                  <td>{c.description}</td>

                  <td>
                    <select
                      style={styles.statusSelect}
                      value={c.status}
                      onChange={(e) =>
                        updateStatus(c._id, e.target.value)
                      }
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                    </select>
                  </td>

                  <td>
                    <button
                      style={styles.deleteBtn}
                      onClick={() => deleteComplaint(c._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

/* Reusable Card Component */
const Card = ({ title, value }) => (
  <div style={styles.summaryCard}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

/* Styles */
const styles = {
  container: {
    padding: "30px",
    fontFamily: "Segoe UI",
    background: "#0f172a",
    color: "white",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(90deg, #6366f1, #9333ea)",
    padding: "20px",
    borderRadius: "12px",
  },

  logout: {
    padding: "8px 15px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  summaryContainer: {
    display: "flex",
    gap: "20px",
    margin: "20px 0",
  },

  summaryCard: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
    padding: "20px",
    borderRadius: "12px",
    flex: 1,
    textAlign: "center",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(8px)",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px",
  },

  controls: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    width: "220px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },

  statusSelect: {
    padding: "6px",
    borderRadius: "6px",
  },

  deleteBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Admin;
