// // import React, { useState } from "react";
// // import axios from "axios";

// // function Complaint() {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await axios.post("http://localhost:5000/api/complaints", {
// //         title,
// //         description
// //       });

// //       alert("Complaint submitted!");
// //       setTitle("");
// //       setDescription("");

// //     } catch (error) {
// //       alert("Error submitting complaint");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "40px" }}>
// //       <h2>Submit Complaint</h2>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           placeholder="Complaint title"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //         />
// //         <br /><br />

// //         <textarea
// //           placeholder="Describe your issue"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //         />
// //         <br /><br />

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Complaint;

// // import React, { useState } from "react";
// // import axios from "axios";

// // function Complaint() {
// //   const user = JSON.parse(localStorage.getItem("user"));

// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!user) {
// //       alert("Please login first");
// //       return;
// //     }

// //     try {
// //       await axios.post("http://localhost:5000/api/complaints/add", {

// //         userId: user._id,
// //         title,
// //         description
// //       });

// //       alert("Complaint submitted!");
// //       setTitle("");
// //       setDescription("");

// //     } catch (error) {
// //       console.error(error);
// //       console.log(error.response?.data);
// //       alert("Error submitting complaint");

// //     }
// //   };

// //   return (
// //     <div style={{ padding: "40px" }}>
// //       <h2>Submit Complaint</h2>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           placeholder="Complaint title"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           required
// //         />
// //         <br /><br />

// //         <textarea
// //           placeholder="Describe your issue"
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //           required
// //         />
// //         <br /><br />

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Complaint;


// // import React, { useState } from "react";
// // import axios from "axios";

// // function Complaint() {
// // const [title, setTitle] = useState("");
// // const [description, setDescription] = useState("");

// // const user = JSON.parse(localStorage.getItem("user"));

// // const handleSubmit = async (e) => {
// // e.preventDefault();

// // ```
// // try {
// //   await axios.post("http://localhost:5000/api/complaints/add", {
// //     userId: user.id,
// //     title,
// //     description
// //   });

// //   alert("Complaint submitted!");
// //   setTitle("");
// //   setDescription("");

// // } catch (error) {
// //   console.log(error.response?.data);
// //   alert("Error submitting complaint");
// // }
// // ```

// // };

// // return (
// // <div style={{ padding: "40px" }}> <h2>Submit Complaint</h2>

// // ```
// //   <form onSubmit={handleSubmit}>
// //     <input
// //       placeholder="Complaint title"
// //       value={title}
// //       onChange={(e) => setTitle(e.target.value)}
// //     />
// //     <br /><br />

// //     <textarea
// //       placeholder="Describe your issue"
// //       value={description}
// //       onChange={(e) => setDescription(e.target.value)}
// //     />
// //     <br /><br />

// //     <button type="submit">Submit</button>
// //   </form>
// // </div>


// // );
// // }

// // export default Complaint;

// import React, { useState } from "react";
// import axios from "axios";

// function Complaint() {
// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");

// // ✅ Get logged-in user
// const user = JSON.parse(localStorage.getItem("user"));

// const handleSubmit = async (e) => {
// e.preventDefault();

// ```
// // ❗ Check if user exists
// if (!user) {
//   alert("Please login first");
//   return;
// }

// try {
//   await axios.post("http://localhost:5000/api/complaints/add", {
//     userId: user.id,
//     title: title,
//     description: description
//   });

//   alert("Complaint submitted successfully!");

//   setTitle("");
//   setDescription("");

// } catch (error) {
//   console.log(error);
//   alert("Error submitting complaint");
// }
// ```

// };

// return (
// <div style={{ padding: "40px" }}> <h2>Submit Complaint</h2>

// ```
//   <form onSubmit={handleSubmit}>
//     <input
//       placeholder="Complaint title"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//     />
//     <br /><br />

//     <textarea
//       placeholder="Describe your issue"
//       value={description}
//       onChange={(e) => setDescription(e.target.value)}
//     />
//     <br /><br />

//     <button type="submit">Submit</button>
//   </form>
// </div>


// );
// }

// export default Complaint;

// import React, { useState } from "react";
// import axios from "axios";

// function Complaint() {
// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");

// const user = JSON.parse(localStorage.getItem("user") || "null");

// const handleSubmit = async (e) => {
// e.preventDefault();


// if (!user) {
//   alert("Please login first");
//   return;
// }

// try {
//   const response = await axios.post(
//     "http://localhost:5000/api/complaints/add",
//     {
//       userId: user.id,
//       title: title,
//       description: description,
//     }
//   );

//   alert(response.data.message);

//   setTitle("");
//   setDescription("");
// } catch (error) {
//   console.error("Error:", error);
//   alert("Complaint submission failed");
// }


// };

// return (
// <div style={{ padding: "40px" }}> <h2>Submit Complaint</h2>

// ```
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       placeholder="Complaint title"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//       required
//     />

//     <br /><br />

//     <textarea
//       placeholder="Describe your issue"
//       value={description}
//       onChange={(e) => setDescription(e.target.value)}
//       required
//     />

//     <br /><br />

//     <button type="submit">Submit Complaint</button>
//   </form>
// </div>


// );
// }

// export default Complaint;


// import React, { useState } from "react";
// import axios from "axios";

// function Complaint() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/api/complaints/add", {
//         userId: user._id,
//         title,
//         description,
//       });

//       alert("Complaint submitted!");
//       setTitle("");
//       setDescription("");
//     } catch (error) {
//       console.error(error);
//       alert("Error submitting complaint");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Submit Complaint</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Complaint title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <br />
//         <br />

//         <textarea
//           placeholder="Describe your issue"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />

//         <br />
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Complaint;


// import React, { useState } from "react";
// import axios from "axios";

// function Complaint() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // ✅ Get logged-in user
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Check user exists
//     if (!user || !user._id) {
//       alert("Please login again");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/complaints/add", {
//         userId: user._id, // ✅ THIS WAS MISSING
//         title,
//         description,
//       });

//       alert("Complaint submitted!");

//       setTitle("");
//       setDescription("");

//     } catch (error) {
//       console.error(error);
//       alert("Error submitting complaint");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Submit Complaint</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Complaint title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br /><br />

//         <textarea
//           placeholder="Describe your issue"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Complaint;

import React, { useState } from "react";
import axios from "axios";

function Complaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login again");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/complaints/add", {
        userId: user.id,
        title,
        description
      });

      alert("Complaint submitted!");
      setTitle("");
      setDescription("");

    } catch (error) {
      alert(error.response?.data?.message || "Error submitting complaint");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Submit Complaint</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Complaint title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Describe your issue"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Complaint;
