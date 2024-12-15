const express = require("express");
const {
  getExperts,
  createExpert,
} = require("../controllers/expert.controller");
const multer = require("multer");

const router = express.Router();

// Define routes
router.get("/", getExperts);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Save files in uploads/profile_pictures
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  },
});

const upload = multer({ storage });

// Define routes
router.post("/", upload.single("profilePicture"), createExpert);

module.exports = router;
