// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => {
//   res.send("ResolveNow Backend Running");
// });

// // Routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/complaints", require("./routes/complaint"));

// mongoose.connect("mongodb://127.0.0.1:27017/resolvenow")
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(5000, () => {
//       console.log("Server running on port 5000");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("ResolveNow Backend Running");
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/complaints", require("./routes/complaint"));

mongoose.connect("mongodb://127.0.0.1:27017/resolvenow")
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("MongoDB error:", err);
  });
