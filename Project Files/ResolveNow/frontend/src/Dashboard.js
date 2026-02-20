


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaSignOutAlt, FaPlusCircle } from "react-icons/fa";
// import { toast } from "react-toastify";

// function Dashboard() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user") || "null");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     if (!user || !user._id) {
//       navigate("/login");
//       return;
//     }

//     fetchComplaints();
//   }, []);

//   const fetchComplaints = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/complaints/user/${user._id}`
//       );
//       setComplaints(res.data);
//     } catch {
//       toast.error("Error loading complaints");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !description) {
//       toast.warning("Please fill all fields");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/complaints/add", {
//         userId: user._id,
//         title,
//         description,
//       });

//       toast.success("Complaint submitted successfully!");

//       setTitle("");
//       setDescription("");
//       fetchComplaints();
//     } catch {
//       toast.error("Failed to submit complaint");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     toast.info("Logged out successfully");
//     navigate("/login");
//   };

//   return (
//     <motion.div
//       style={styles.container}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Header */}
//       <div style={styles.header}>
//         <h1>Welcome to ResolveNow 🎉</h1>

//         <button style={styles.logout} onClick={handleLogout}>
//           <FaSignOutAlt style={{ marginRight: "6px" }} />
//           Logout
//         </button>
//       </div>

//       {/* User Info */}
//       <motion.div
//         style={styles.card}
//         whileHover={{ scale: 1.02 }}
//       >
//         <h3>User Info</h3>
//         <p><b>Name:</b> {user.name}</p>
//         <p><b>Email:</b> {user.email}</p>
//       </motion.div>

//       {/* Complaint Form */}
//       <motion.div
//         style={styles.card}
//         whileHover={{ scale: 1.02 }}
//       >
//         <h2>Submit Complaint</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             style={styles.input}
//             placeholder="Complaint Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <textarea
//             style={styles.textarea}
//             placeholder="Complaint Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <button style={styles.submitBtn} type="submit">
//             <FaPlusCircle style={{ marginRight: "6px" }} />
//             Submit Complaint
//           </button>
//         </form>
//       </motion.div>

//       {/* Complaint List */}
//       <motion.div
//         style={styles.card}
//         whileHover={{ scale: 1.02 }}
//       >
//         <h2>Your Complaints</h2>

//         {complaints.length === 0 ? (
//           <p>No complaints submitted yet.</p>
//         ) : (
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {complaints.map((c) => (
//                 <tr key={c._id}>
//                   <td>{c.title}</td>
//                   <td>{c.description}</td>
//                   <td>
//                     <span
//                       style={{
//                         ...styles.status,
//                         background:
//                           c.status === "Resolved"
//                             ? "#4caf50"
//                             : c.status === "In Progress"
//                             ? "#2196f3"
//                             : "#ff9800",
//                       }}
//                     >
//                       {c.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// // 🎨 Styling
// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "Arial",
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #667eea, #764ba2)",
//   },

//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     color: "white",
//     marginBottom: "20px",
//   },

//   logout: {
//     padding: "10px 18px",
//     background: "#ff4d4f",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "6px",
//     fontWeight: "bold",
//     display: "flex",
//     alignItems: "center",
//   },

//   card: {
//     background: "rgba(255, 255, 255, 0.95)",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//     marginTop: "20px",
//   },

//   input: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "12px",
//     borderRadius: "6px",
//     border: "1px solid #ddd",
//   },

//   textarea: {
//     width: "100%",
//     padding: "12px",
//     height: "90px",
//     marginBottom: "12px",
//     borderRadius: "6px",
//     border: "1px solid #ddd",
//   },

//   submitBtn: {
//     padding: "12px 18px",
//     background: "#4caf50",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "6px",
//     fontWeight: "bold",
//     display: "flex",
//     alignItems: "center",
//   },

//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginTop: "10px",
//   },

//   status: {
//     padding: "6px 12px",
//     color: "white",
//     borderRadius: "20px",
//     fontSize: "12px",
//     fontWeight: "bold",
//   },
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSignOutAlt, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    if (!user || !user._id) {
      navigate("/login");
      return;
    }
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/complaints/user/${user._id}`
      );
      setComplaints(res.data);
    } catch {
      toast.error("Error loading complaints");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.warning("Fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/complaints/add", {
        userId: user._id,
        title,
        description,
      });

      toast.success("Complaint submitted!");
      setTitle("");
      setDescription("");
      fetchComplaints();
    } catch {
      toast.error("Submission failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.page}>

      {/* Floating Background Shapes */}
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>

      {/* Sidebar */}
      <motion.div
        style={styles.sidebar}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <FaUserCircle size={60} color="white" />
        <h3 style={{ color: "white" }}>{user.name}</h3>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </motion.div>

      {/* Main Content */}
      <div style={styles.main}>

        {/* Complaint Form */}
        <motion.div
          style={styles.glassCard}
          whileHover={{ scale: 1.03 }}
        >
          <h2>Submit Complaint</h2>

          <form onSubmit={handleSubmit}>
            <input
              style={styles.input}
              placeholder="Complaint Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              style={styles.textarea}
              placeholder="Complaint Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <motion.button
              style={styles.submitBtn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPlusCircle /> Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Complaint List */}
        <motion.div
          style={styles.glassCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Your Complaints</h2>

          {complaints.length === 0 ? (
            <p>No complaints yet.</p>
          ) : (
            <div style={styles.list}>
              {complaints.map((c) => (
                <motion.div
                  key={c._id}
                  style={styles.complaintItem}
                  whileHover={{ scale: 1.03 }}
                >
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>

                  <span
                    style={{
                      ...styles.status,
                      background:
                        c.status === "Resolved"
                          ? "#00e676"
                          : c.status === "In Progress"
                          ? "#00b0ff"
                          : "#ff9100",
                    }}
                  >
                    {c.status}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #1d2671, #c33764)",
    overflow: "hidden",
    position: "relative",
  },

  bgCircle1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "50%",
    top: "-50px",
    right: "-50px",
  },

  bgCircle2: {
    position: "absolute",
    width: "200px",
    height: "200px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "50%",
    bottom: "50px",
    left: "200px",
  },

  sidebar: {
    width: "220px",
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    textAlign: "center",
    zIndex: 2,
  },

  logoutBtn: {
    marginTop: "20px",
    padding: "10px",
    background: "#ff4d4f",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "8px",
    width: "100%",
  },

  main: {
    flex: 1,
    padding: "30px",
    overflowY: "auto",
    zIndex: 2,
  },

  glassCard: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    padding: "25px",
    borderRadius: "16px",
    color: "white",
    marginBottom: "25px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "none",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    height: "90px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "none",
  },

  submitBtn: {
    padding: "12px",
    background: "#00e676",
    border: "none",
    color: "black",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  list: {
    display: "grid",
    gap: "15px",
  },

  complaintItem: {
    background: "rgba(255,255,255,0.2)",
    padding: "15px",
    borderRadius: "12px",
  },

  status: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "bold",
    color: "black",
  },
};

export default Dashboard;
