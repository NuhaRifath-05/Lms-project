const express = require("express");
const Certificate = require("../models/Certificate");

const router = express.Router();

// Generate certificate (auto)
router.post("/generate", async (req, res) => {
  const { learnerName, courseName } = req.body;

  const certificate = new Certificate({
    learnerName,
    courseName
  });

  await certificate.save();
  res.json({
    message: "Certificate generated successfully",
    certificate
  });
});

// Get all certificates
router.get("/", async (req, res) => {
  const certificates = await Certificate.find();
  res.json(certificates);
});

module.exports = router;
