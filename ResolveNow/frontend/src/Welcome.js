// function Welcome({ setPage }) {
//   return (
//     <div className="container text-center mt-5">
//       <h1 className="mb-3">Welcome to ResolveNow</h1>
//       <p className="mb-4">Register complaints. Track status. Get resolution.</p>

//       <button
//         className="btn btn-primary m-2"
//         onClick={() => setPage("login")}
//       >
//         Login
//       </button>

//       <button
//         className="btn btn-outline-primary m-2"
//         onClick={() => setPage("signup")}
//       >
//         Sign Up
//       </button>
//     </div>
//   );
// }

// export default Welcome;
// import "./auth.css";

// function Welcome({ setPage }) {
//   return (
//     <div
//       className="d-flex flex-column justify-content-center align-items-center vh-100"
//       style={{
//         background: "linear-gradient(to right, #4facfe, #00f2fe)",
//         color: "white",
//       }}
//     >
//       <h1 className="mb-3">ResolveNow</h1>
//       <p className="mb-4 fs-5">
//         A smart platform to raise and track complaints
//       </p>

//       <div>
//         <button
//           className="btn btn-light me-3 px-4"
//           onClick={() => setPage("login")}
//         >
//           Login
//         </button>

//         <button
//           className="btn btn-outline-light px-4"
//           onClick={() => setPage("signup")}
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Welcome;

// import { useNavigate } from "react-router-dom";
// import "./auth.css";

// function Welcome() {
//   const navigate = useNavigate();

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-left">
//         <h1>Welcome to ResolveNow</h1>
//         <p>Register complaints. Track status. Get resolution.</p>
//       </div>

//       <div className="auth-right">
//         <div className="auth-card">
//           <button onClick={() => navigate("/login")}>Login</button>
//           <br /><br />
//           <button onClick={() => navigate("/signup")}>Sign Up</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Welcome;



import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <h1>ResolveNow</h1>
        <p>Register and track complaints easily</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h3>Welcome</h3>
          <button onClick={() => navigate("/login")}>Login</button>
          <br /><br />
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
