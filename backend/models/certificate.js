const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  learnerName: String,
  courseName: String,
  issueDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Certificate", certificateSchema);
