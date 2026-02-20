// const express = require("express");
// const router = express.Router();

// router.post("/register", (req, res) => {
//   res.json({ message: "Register API working" });
// });

// router.post("/login", (req, res) => {
//   res.json({ message: "Login API working" });
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;

//     if (!name || !email || !phone || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       password
//     });

//     await user.save();

//     res.status(201).json({ message: "Signup successful" });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.status(200).json({
//       message: "Login successful",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email
//       }
//     });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;

//     if (!name || !email || !phone || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       password,
//     });

//     await user.save();

//     res.status(201).json({ message: "Signup successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");


// // ================= REGISTER =================
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;

//     if (!name || !email || !phone || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       password,
//     });

//     await user.save();

//     res.status(201).json({ message: "Signup successful" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // ================= LOGIN =================
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     // ✅ Detect admin
//     const isAdmin = email === "admin@gmail.com";

//     res.json({
//       message: "Login successful",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: isAdmin ? "admin" : "user",
//       },
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, phone, password, role } = req.body;

//     if (!name || !email || !phone || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       password,
//       role: role || "user", // default = user
//     });

//     await user.save();

//     res.status(201).json({ message: "Signup successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role || "user",
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");


// // REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, phone, password, role } = req.body;

//     if (!name || !email || !phone || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       password,
//       role: role || "user"
//     });

//     await user.save();

//     res.status(201).json({
//       message: "Signup successful"
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Server error"
//     });
//   }
// });


// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         message: "Email and password required"
//       });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({
//         message: "User not found"
//       });
//     }

//     if (user.password !== password) {
//       return res.status(400).json({
//         message: "Invalid password"
//       });
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role || "user"
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Server error"
//     });
//   }
// });


// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // REGISTER (normal users only)
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;

//     const user = new User({
//       name,
//       email,
//       phone,
//       password,
//       role: "user"
//     });

//     await user.save();

//     res.json({ message: "Signup successful" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // ✅ HARD ADMIN LOGIN
//     if (email === "admin@resolve48.com" && password === "admin123") {
//       return res.json({
//         message: "Admin login successful",
//         user: {
//           _id: "admin",
//           name: "Admin",
//           email: email,
//           role: "admin"
//         }
//       });
//     }

//     // ✅ NORMAL USER LOGIN
//     const user = await User.findOne({ email });

//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: "user"
//       }
//     });

//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;

//     if (!name || !email || !phone || !password) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       password,
//       role: "user", // default user
//     });

//     await user.save();

//     res.status(201).json({ message: "Signup successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     // ✅ FORCE ADMIN EMAIL
//     let role = "user";

//     if (email === "admin@resolve72.com") {
//       role = "admin";
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: role,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ FORGOT PASSWORD
// router.post("/forgot-password", async (req, res) => {
//   try {
//     const { email, newPassword } = req.body;

//     if (!email || !newPassword) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     user.password = newPassword;
//     await user.save();

//     res.json({ message: "Password updated successfully" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Reset password
// router.post("/reset-password", async (req, res) => {
//   try {
//     const { email, newPassword } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.password = newPassword;
//     await user.save();

//     res.json({ message: "Password reset successful" });

//   } catch (err) {
//     res.status(500).json({ message: "Reset failed" });
//   }
// });


// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");


// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = new User({
      name,
      email,
      phone,
      password,
      role: "user",
    });

    await user.save();

    res.status(201).json({
      message: "Signup successful",
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // ✅ Force admin role
    let role = "user";

    if (email === "admin@resolve72.com") {
      role = "admin";
    }

    res.json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: role,
      },
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});


// ================= FORGOT PASSWORD =================
router.put("/forgot-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        message: "Email and new password required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.password = newPassword;
    await user.save();

    res.json({
      message: "Password updated successfully",
    });

  } catch (err) {
    console.error("FORGOT PASSWORD ERROR:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});


module.exports = router;
