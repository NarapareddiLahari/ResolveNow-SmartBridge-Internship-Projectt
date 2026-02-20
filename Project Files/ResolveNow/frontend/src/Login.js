// import { useState } from "react";

// function Login({ setPage }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = () => {
//     if (!email || !password) {
//       setError("Please enter email and password");
//       return;
//     }

//     setError("");
//     alert("Login successful (backend will be connected next)");
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow-lg" style={{ width: "420px", borderRadius: "12px" }}>
//         <h3 className="text-center mb-3">Welcome Back</h3>
//         <p className="text-center text-muted mb-4">
//           Login to continue to ResolveNow
//         </p>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <input
//           className="form-control mb-3"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
//           Login
//         </button>

//         <p className="text-center mb-0">
//           Don’t have an account?{" "}
//           <span
//             style={{ color: "#0d6efd", cursor: "pointer" }}
//             onClick={() => setPage("signup")}
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
// import { useState } from "react";

// function Login({ setPage }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-left">
//         <h1>ResolveNow</h1>
//         <p>
//           Raise complaints, track progress, and get faster resolutions with a
//           transparent system.
//         </p>
//       </div>

//       <div className="auth-right">
//         <div className="auth-card">
//           <h3>Login</h3>
//           <p className="text-muted mb-4">Welcome back</p>

//           <input
//             className="form-control"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button className="btn btn-primary w-100">
//             Login
//           </button>

//           <p className="mt-3 text-center">
//             New here?{" "}
//             <span className="auth-link" onClick={() => setPage("signup")}>
//               Create account
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import { useNavigate } from "react-router-dom";
// import "./auth.css";

// function Login() {
//   const navigate = useNavigate();

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-left">
//         <h1>ResolveNow</h1>
//         <p>Login to manage your complaints</p>
//       </div>

//       <div className="auth-right">
//         <div className="auth-card">
//           <h3>Login</h3>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Login</button>

//           <p>
//             New user?{" "}
//             <span className="auth-link" onClick={() => navigate("/signup")}>
//               Signup
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password
//       });

//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         /><br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         /><br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email: email,
//           password: password,
//         }
//       );

//       // Save user data in browser
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       alert("Login successful!");

//       // Redirect to dashboard
//       window.location.href = "/dashboard";

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import "./auth.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       window.location.href = "/dashboard";

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-left">
//         <h1>ResolveNow</h1>
//         <p>
//           Welcome back! Login to manage your complaints and track resolutions
//           easily.
//         </p>
//       </div>

//       <div className="auth-right">
//         <div className="auth-card">
//           <h3>Login</h3>

//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       alert(res.data.message);

//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         /><br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         /><br /><br />

//         <button type="submit">Login</button>
//       </form>

//       <p>
//         Don’t have an account?{" "}
//         <Link to="/signup">Signup here</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       const user = res.data.user;

//       localStorage.setItem("user", JSON.stringify(user));

//       // ✅ Admin check
//       if (email === "admin@resolvenow.com") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       // ✅ SAVE USER TO LOCAL STORAGE
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       alert("Login successful");

//       // ✅ Go to dashboard
//       navigate("/dashboard");

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       const user = res.data.user;

//       // ✅ Save user
//       localStorage.setItem("user", JSON.stringify(user));

//       alert("Login successful");

//       // ✅ Redirect based on role
//       if (user.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const navigate = useNavigate();

// const handleLogin = async (e) => {
// e.preventDefault();


// try {
//   const res = await axios.post(
//     "http://localhost:5000/api/auth/login",
//     { email, password }
//   );

//   const user = res.data.user;

//   // ✅ Save user
//   localStorage.setItem("user", JSON.stringify(user));

//   alert("Login successful");

//   // ✅ Redirect based on role
//   if (user.role === "admin") {
//     navigate("/admin");
//   } else {
//     navigate("/dashboard");
//   }

// } catch (err) {
//   alert(err.response?.data?.message || "Login failed");
// }


// };

// return (
// <div style={{ padding: "40px" }}> <h2>Login</h2>


//   <form onSubmit={handleLogin}>
//     <input
//       placeholder="Email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//     />
//     <br /><br />

//     <input
//       type="password"
//       placeholder="Password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//     />
//     <br /><br />

//     <button type="submit">Login</button>
//   </form>
// </div>


// );
// }

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       const user = res.data.user;

//       // ✅ Save user in local storage
//       localStorage.setItem("user", JSON.stringify(user));

//       alert("Login successful");

//       // ✅ Redirect based on role
//       if (email === "admin@resolve72.com") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }


//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       const user = res.data.user;

//       // ✅ Save user in local storage
//       localStorage.setItem("user", JSON.stringify(user));

//       alert("Login successful");

//       // ✅ Redirect based on admin email
//       if (email === "admin@resolve72.com") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Login</button>
//       </form>

//       {/* ✅ Forgot password link */}
//       <p style={{ marginTop: "15px" }}>
//         <a href="/forgot">Forgot Password?</a>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       const user = res.data.user;
//       localStorage.setItem("user", JSON.stringify(user));

//       if (email === "admin@resolve72.com") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }

//     } catch {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.card} onSubmit={handleLogin}>
//         <h2>Welcome Back 👋</h2>

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

//         <button style={styles.button}>Login</button>

//         <p>
//           Don't have an account?{" "}
//           <Link to="/signup">Signup</Link>
//         </p>
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

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      if (email === "admin@resolve72.com") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch {
      alert("Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✅ Forgot Password Link */}
        <div style={{ textAlign: "right" }}>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button style={styles.button}>Login</button>

        <p style={{ textAlign: "center" }}>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
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
    gap: "12px",
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

export default Login;
