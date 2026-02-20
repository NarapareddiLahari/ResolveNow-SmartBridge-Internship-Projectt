// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");

// // ✅ Add complaint
// router.post("/add", async (req, res) => {
// try {
// const { userId, title, description } = req.body;


// if (!userId || !title || !description) {
//   return res.status(400).json({ message: "All fields required" });
// }

// const complaint = new Complaint({
//   userId,
//   title,
//   description
// });

// await complaint.save();

// res.status(201).json({ message: "Complaint submitted" });

// } catch (err) {
// console.error(err);
// res.status(500).json({ message: err.message });
// }
// });

// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
// try {
// const complaints = await Complaint.find({
// userId: req.params.userId
// }).populate("userId", "name email");


// res.json(complaints);


// } catch (err) {
// console.error(err);
// res.status(500).json({ message: err.message });
// }
// });

// // ✅ ADMIN: Get ALL complaints
// router.get("/all", async (req, res) => {
// try {
// const complaints = await Complaint.find().populate(
// "userId",
// "name email"
// );


// res.json(complaints);


// } catch (err) {
// console.error(err);
// res.status(500).json({ message: err.message });
// }
// });

// // ✅ Update complaint status
// router.put("/update/:id", async (req, res) => {
// try {
// const { status } = req.body;


// const complaint = await Complaint.findByIdAndUpdate(
//   req.params.id,
//   { status },
//   { new: true }
// );

// res.json(complaint);


// } catch (err) {
// console.error(err);
// res.status(500).json({ message: err.message });
// }
// });

// // Test route
// router.get("/test", (req, res) => {
// res.send("Complaint route working");
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");

// // 👉 Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description,
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // 👉 Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId,
//     });

//     res.json(complaints);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // 👉 Get ALL complaints (admin view)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find().populate(
//       "userId",
//       "name email"
//     );

//     res.json(complaints);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // 👉 Test route
// router.get("/test", (req, res) => {
//   res.send("Complaint route working");
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description,
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId,
//     });
//     res.json(complaints);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ ADMIN: get ALL complaints
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find().populate(
//       "userId",
//       "name email"
//     );
//     res.json(complaints);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });


// // test route
// router.get("/test", (req, res) => {
//   res.send("Complaint route working");
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");

// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     const complaint = new Complaint({
//       userId,
//       title,
//       description
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     const complaint = new Complaint({
//       userId,
//       title,
//       description
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get all complaints (Admin)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ NEW — Resolve complaint
// router.put("/:id/resolve", async (req, res) => {
//   try {
//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status: "Resolved" },
//       { new: true }
//     );

//     if (!complaint) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json(complaint);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to update complaint" });
//   }
// });


// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     const complaint = new Complaint({
//       userId,
//       title,
//       description
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get all complaints (Admin)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ NEW — Resolve complaint
// router.put("/:id/resolve", async (req, res) => {
//   try {
//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status: "Resolved" },
//       { new: true }
//     );

//     if (!complaint) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json(complaint);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to update complaint" });
//   }
// });

// router.put("/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body;

//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     res.json(complaint);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to update status" });
//   }
// });


// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get all complaints (Admin)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Update complaint status (Admin dropdown)
// router.put("/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body;

//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!complaint) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json(complaint);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to update status" });
//   }
// });


// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description,
//     });

//     await complaint.save();

//     res.json({ message: "Complaint submitted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;

//     // 👉 Validate Mongo ID
//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return res.json([]); // return empty instead of crashing
//     }

//     const complaints = await Complaint.find({ userId });

//     res.json(complaints);
//   } catch (err) {
//     console.error("Fetch error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ Admin: get all complaints
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ Update status
// router.put("/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body;

//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     res.json(complaint);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");

// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     // ✅ Debug: print incoming data
//     console.log("Incoming complaint:", req.body);

//     if (!userId || !title || !description) {
//       return res.status(400).json({
//         message: "Missing fields",
//         received: req.body
//       });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Get all complaints
// router.get("/all", async (req, res) => {
//   const complaints = await Complaint.find()
//     .populate("userId", "name email");

//   res.json(complaints);
// });

// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   const complaints = await Complaint.find({
//     userId: req.params.userId
//   });

//   res.json(complaints);
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");

// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     // Simple validation
//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description,
//       status: "Pending"
//     });

//     await complaint.save();

//     res.status(201).json({ message: "Complaint submitted" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Get all complaints (Admin)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description,
//       status: "Pending",
//     });

//     await complaint.save();

//     res.status(201).json(complaint);

//   } catch (err) {
//     console.error("ADD ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get all complaints (Admin)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error("FETCH ALL ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId,
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error("FETCH USER ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Update complaint status (THIS FIXES YOUR ERROR)
// router.put("/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!status) {
//       return res.status(400).json({ message: "Status required" });
//     }

//     const updated = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json(updated);

//   } catch (err) {
//     console.error("STATUS UPDATE ERROR:", err);
//     res.status(500).json({ message: "Failed to update status" });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     await Complaint.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Delete failed" });
//   }
// });


// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description,
//       status: "Pending",
//     });

//     const saved = await complaint.save();

//     res.status(201).json(saved);

//   } catch (err) {
//     console.error("ADD ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get all complaints (Admin)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error("FETCH ALL ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId,
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error("FETCH USER ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Update complaint status
// router.put("/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!status) {
//       return res.status(400).json({ message: "Status required" });
//     }

//     const updated = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json(updated);

//   } catch (err) {
//     console.error("STATUS UPDATE ERROR:", err);
//     res.status(500).json({ message: "Failed to update status" });
//   }
// });


// // ✅ Delete complaint (FIXED VERSION)
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Complaint.findByIdAndDelete(req.params.id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json({ message: "Deleted successfully" });

//   } catch (err) {
//     console.error("DELETE ERROR:", err);
//     res.status(500).json({ message: "Delete failed" });
//   }
// });


// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const Complaint = require("../models/Complaint");


// // ✅ Add complaint
// router.post("/add", async (req, res) => {
//   try {
//     const { userId, title, description } = req.body;

//     if (!userId || !title || !description) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const complaint = new Complaint({
//       userId,
//       title,
//       description,
//       status: "Pending",
//     });

//     await complaint.save();
//     res.status(201).json(complaint);

//   } catch (err) {
//     console.error("ADD ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get all complaints (Admin)
// router.get("/all", async (req, res) => {
//   try {
//     const complaints = await Complaint.find()
//       .populate("userId", "name email");

//     res.json(complaints);

//   } catch (err) {
//     console.error("FETCH ALL ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Get complaints by user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const complaints = await Complaint.find({
//       userId: req.params.userId,
//     });

//     res.json(complaints);

//   } catch (err) {
//     console.error("FETCH USER ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ✅ Update complaint status
// router.put("/:id/status", async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!status) {
//       return res.status(400).json({ message: "Status required" });
//     }

//     const updated = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     res.json(updated);

//   } catch (err) {
//     console.error("STATUS UPDATE ERROR:", err);
//     res.status(500).json({ message: "Failed to update status" });
//   }
// });


// // ✅ DELETE complaint (FIXED + DEBUGGING)
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     console.log("Delete request received for ID:", id);

//     // Validate Mongo ID
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid complaint ID" });
//     }

//     const deleted = await Complaint.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Complaint not found" });
//     }

//     console.log("Deleted complaint:", deleted._id);

//     res.json({ message: "Deleted successfully" });

//   } catch (err) {
//     console.error("DELETE ERROR:", err);
//     res.status(500).json({ message: "Delete failed", error: err.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Complaint = require("../models/Complaint");


// ✅ Add complaint
router.post("/add", async (req, res) => {
  try {
    const { userId, title, description } = req.body;

    if (!userId || !title || !description) {
      return res.status(400).json({ message: "All fields required" });
    }

    const complaint = new Complaint({
      userId,
      title,
      description,
      status: "Pending",
    });

    await complaint.save();
    res.status(201).json(complaint);

  } catch (err) {
    console.error("ADD ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Get all complaints (Admin)
router.get("/all", async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("userId", "name email");

    res.json(complaints);

  } catch (err) {
    console.error("FETCH ALL ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Get complaints by user
router.get("/user/:userId", async (req, res) => {
  try {
    const complaints = await Complaint.find({
      userId: req.params.userId,
    });

    res.json(complaints);

  } catch (err) {
    console.error("FETCH USER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Update complaint status
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status required" });
    }

    const updated = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json(updated);

  } catch (err) {
    console.error("STATUS UPDATE ERROR:", err);
    res.status(500).json({ message: "Failed to update status" });
  }
});


// ✅ DELETE complaint (SUPER SAFE VERSION)
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // 🔍 Check valid Mongo ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid complaint ID" });
    }

    const deleted = await Complaint.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json({ message: "Complaint deleted successfully" });

  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
