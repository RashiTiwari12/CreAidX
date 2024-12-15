const Expert = require("../models/expert.model");

const getExperts = async (req, res) => {
  try {
    const experts = await Expert.find({});

    // Add full URL for profile_picture
    const expertsWithImageUrls = experts.map((expert) => ({
      ...expert._doc,
      profilePicture: expert.profilePicture
        ? `${req.protocol}://${req.get("host")}/${expert.profilePicture}`
        : null,
    }));

    res.status(200).json(expertsWithImageUrls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new expert
const createExpert = async (req, res) => {
  try {
    const {
      name,
      about,
      experience,
      location,
      tags,
      facebook,
      twitter,
      linkedin,
      category,
    } = req.body;

    // File path for profile picture
    const profilePicture = req.file ? req.file.path : null;

    const expert = await Expert.create({
      name,
      profilePicture,
      about,
      experience,
      location,
      tags: tags ? JSON.parse(tags) : [], // Convert tags to an array if it's a JSON string
      facebook,
      twitter,
      linkedin,
      category,
    });

    res.status(201).json(expert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExperts,
  createExpert,
};
