const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/lms")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
const certificateRoutes = require("./routes/certificateRoutes");
app.use("/api/certificates", certificateRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
// Temporary test certificate
const Certificate = require("./models/Certificate");
Certificate.find().then(data => {
  if(data.length === 0){
    Certificate.create({ learnerName: "Syed", courseName: "React Basics" });
  }
});

