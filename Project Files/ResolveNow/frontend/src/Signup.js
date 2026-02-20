// // import { useState } from "react";

// // function Signup({ setPage }) {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSignup = () => {
// //     if (!name || !email || !password) {
// //       setError("All fields are required");
// //       return;
// //     }

// //     setError("");
// //     alert("Signup successful (backend will be connected next)");
// //   };

// //   return (
// //     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
// //       <div className="card p-4 shadow-lg" style={{ width: "420px", borderRadius: "12px" }}>
// //         <h3 className="text-center mb-3">Create Account</h3>
// //         <p className="text-center text-muted mb-4">
// //           Join ResolveNow today
// //         </p>

// //         {error && <div className="alert alert-danger">{error}</div>}

// //         <input
// //           className="form-control mb-3"
// //           placeholder="Full Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />

// //         <input
// //           className="form-control mb-3"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />

// //         <input
// //           type="password"
// //           className="form-control mb-3"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />

// //         <button className="btn btn-success w-100 mb-3" onClick={handleSignup}>
// //           Sign Up
// //         </button>

// //         <p className="text-center mb-0">
// //           Already have an account?{" "}
// //           <span
// //             style={{ color: "#198754", cursor: "pointer" }}
// //             onClick={() => setPage("login")}
// //           >
// //             Login
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;
// // import { useState } from "react";
// // import "./auth.css";

// // function Signup({ setPage }) {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   return (
// //     <div className="auth-wrapper">
// //       <div className="auth-left">
// //         <h1>ResolveNow</h1>
// //         <p>
// //           Create an account and start resolving issues smarter and faster.
// //         </p>
// //       </div>

// //       <div className="auth-right">
// //         <div className="auth-card">
// //           <h3>Sign Up</h3>
// //           <p className="text-muted mb-4">It takes less than a minute</p>

// //           <input
// //             className="form-control"
// //             placeholder="Full Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />

// //           <input
// //             className="form-control"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />

// //           <input
// //             type="password"
// //             className="form-control"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />

// //           <button className="btn btn-success w-100">
// //             Create Account
// //           </button>

// //           <p className="mt-3 text-center">
// //             Already have an account?{" "}
// //             <span className="auth-link" onClick={() => setPage("login")}>
// //               Login
// //             </span>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;

// import { useNavigate } from "react-router-dom";
// import "./auth.css";

// function Signup() {
//   const navigate = useNavigate();

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-left">
//         <h1>Create Account</h1>
//         <p>Join ResolveNow to raise complaints easily</p>
//       </div>

//       <div className="auth-right">
//         <div className="auth-card">
//           <h3>Signup</h3>
//           <input type="text" placeholder="Full Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Signup</button>

//           <p>
//             Already have an account?{" "}
//             <span className="auth-link" onClick={() => navigate("/login")}>
//               Login
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import React, { useState } from "react";
// import axios from "axios";
// import "./auth.css";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         phone,
//         password,
//       });

//       alert("Signup successful. Now login.");
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-left">
//         <h1>Create Account</h1>
//         <p>Join ResolveNow to raise complaints easily</p>
//       </div>

//       <div className="auth-right">
//         <form className="auth-card" onSubmit={handleSignup}>
//           <h3>Signup</h3>

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Signup</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;



// import React, { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         phone,
//         password
//       });

//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Signup</h2>

//       <form onSubmit={handleSignup}>
//         <input
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         /><br /><br />

//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         /><br /><br />

//         <input
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         /><br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         /><br /><br />

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import "./auth.css";

// function Signup() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         { name, phone, email, password }
//       );

//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-left">
//         <h1>ResolveNow</h1>
//         <p>
//           Create your account and start submitting and tracking complaints
//           instantly.
//         </p>
//       </div>

//       <div className="auth-right">
//         <div className="auth-card">
//           <h3>Signup</h3>

//           <form onSubmit={handleSignup}>
//             <input
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <input
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <button type="submit">Signup</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         form
//       );

//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Signup</h2>

//       <form onSubmit={handleSignup}>
//         <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
//         <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
//         <input name="phone" placeholder="Phone" onChange={handleChange} /><br /><br />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//         /><br /><br />

//         <button type="submit">Signup</button>
//       </form>

//       <p>
//         Already have an account?{" "}
//         <Link to="/login">Login here</Link>
//       </p>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(
//         "http://localhost:5000/api/auth/signup",
//         { name, email, password }
//       );

//       alert("Signup successful");
//       navigate("/login");

//     } catch {
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.card} onSubmit={handleSignup}>
//         <h2>Create Account ✨</h2>

//         <input
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           style={styles.input}
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button style={styles.button}>Signup</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg,#6366f1,#9333ea)",
//   },

//   card: {
//     background: "white",
//     padding: "40px",
//     borderRadius: "12px",
//     width: "350px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },

//   input: {
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//   },

//   button: {
//     padding: "10px",
//     background: "#6366f1",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // ✅ added
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register", // ✅ FIXED route
        { name, email, phone, password }
      );

      alert("Signup successful");
      navigate("/login");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSignup}>
        <h2>Create Account ✨</h2>

        <input
          style={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={styles.button}>Signup</button>
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
    background: "linear-gradient(135deg,#6366f1,#9333ea)",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "10px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Signup;
