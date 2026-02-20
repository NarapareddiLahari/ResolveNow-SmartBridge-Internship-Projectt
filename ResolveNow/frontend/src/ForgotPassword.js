// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const navigate = useNavigate();

//   const handleReset = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(
//         "http://localhost:5000/api/auth/forgot-password",
//         { email, newPassword }
//       );

//       alert("Password updated! Login now.");
//       navigate("/login");

//     } catch (err) {
//       alert(err.response?.data?.message || "Error resetting password");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Forgot Password</h2>

//       <form onSubmit={handleReset}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// }

// export default ForgotPassword;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        "http://localhost:5000/api/auth/forgot-password",
        { email, newPassword }
      );

      alert("Password updated successfully!");
      navigate("/login");

    } catch {
      alert("User not found");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleReset}>
        <h2>Reset Password 🔑</h2>

        <input
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button style={styles.button}>
          Reset Password
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#9333ea,#6366f1)",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "10px",
    background: "#9333ea",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ForgotPassword;
