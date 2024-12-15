const mongoose = require("mongoose");

const BecomeExpertSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], // Mandatory field
      maxlength: 100,
    },
    profilePicture: {
      type: String, // Storing image as a URL/path
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
      maxlength: 255,
    },
    tags: {
      type: [String], // Equivalent to JSONField storing a list of strings
      required: false,
    },
    facebook: {
      type: String, // URL field equivalent
      required: false,
    },
    twitter: {
      type: String, // URL field equivalent
      required: false,
    },
    linkedin: {
      type: String, // URL field equivalent
      required: false,
    },
    category: {
      type: String,
      enum: ["business", "technology", "health", "education", "lifestyle"], // Restricting to the CATEGORY_CHOICES
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const BecomeExpert = mongoose.model("BecomeExpert", BecomeExpertSchema);
module.exports = BecomeExpert;
