
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Welcome from "./Welcome";
// import Login from "./Login";
// import Signup from "./Signup";
// import Dashboard from "./Dashboard";
// import Complaint from "./Complaint";
// import Admin from "./Admin";
// import ForgotPassword from "./ForgotPassword";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/complaint" element={<Complaint />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <ToastContainer position="top-right" autoClose={2000} />


//         {/* ✅ ONLY ONE ADMIN ROUTE */}
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Admin from "./pages/Admin";
// import ForgotPassword from "./pages/ForgotPassword";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   return (
//     <Router>

//       {/* ✅ Routes ONLY contain Route components */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>

//       {/* ✅ ToastContainer goes OUTSIDE Routes */}
//       <ToastContainer position="top-right" autoClose={2000} />

//     </Router>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Complaint from "./Complaint";
import Admin from "./Admin";
import ForgotPassword from "./ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
return ( <BrowserRouter>


  {/* ✅ Routes ONLY contain Route components */}
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/complaint" element={<Complaint />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>

  {/* ✅ ToastContainer goes OUTSIDE Routes */}
  <ToastContainer position="top-right" autoClose={2000} />

</BrowserRouter>

);
}

export default App;
