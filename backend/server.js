
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Student model
const Student = mongoose.model("Student", {
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String
});

// Test API
app.get("/", (req, res) => {
  res.send("CampusConnect Backend is Running!");
});

// Registration API
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const student = new Student({
      name,
      email,
      password,
      role
    });

    await student.save();

    res.status(201).json({
      message: "Registration successful!"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// Connect MongoDB and start server
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Error:", error.message);
  });
