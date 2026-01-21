const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: String,
  description: String
});

module.exports = mongoose.model("Course", courseSchema);
