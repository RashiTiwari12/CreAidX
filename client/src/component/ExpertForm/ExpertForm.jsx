import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpertForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    profilePicture: null,
    about: "",
    experience: "",
    location: "",
    tags: [],
    socialMedia: { facebook: "", twitter: "", linkedin: "" },
    category: "",
  });

  const tagOptions = [
    "Monetization",
    "Content",
    "Algorithm",
    "SEO",
    "Marketing",
  ];
  const categoryOptions = [
    "Business",
    "Technology",
    "Health",
    "Education",
    "Lifestyle",
  ];
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagChange = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    if (formData.profilePicture) {
      formDataToSend.append("profilePicture", formData.profilePicture);
    }
    formDataToSend.append("about", formData.about);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("tags", JSON.stringify(formData.tags)); // Convert tags to JSON
    formDataToSend.append("facebook", formData.socialMedia.facebook);
    formDataToSend.append("twitter", formData.socialMedia.twitter);
    formDataToSend.append("linkedin", formData.socialMedia.linkedin);
    formDataToSend.append("category", formData.category.toLowerCase());

    // Debug: Log FormData entries
    for (const pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post("/api/experts", formDataToSend, {
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Form submitted successfully!");
      navigate("/experts");
    } catch (error) {
      console.error("Error:", error.response); // Log server response for debugging
      alert("Error submitting form.");
    }
  };
  const handleSkip = () => {
    navigate("/");
  };
  return (
    <div className="bg-gradient-to-b from-blue-950 via-black to-blue-900 h-full p-6 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-blue-950  border border-blue-3000 shadow-xl text-white p-8 rounded-lg  "
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Become an Expert
        </h2>
        <p className="text-right" onClick={handleSkip}>
          skip for now
        </p>
        {/* Name */}
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800  rounded-lg p-2"
          />
        </div>

        {/* Profile Picture */}
        <div className="mb-4">
          <label
            htmlFor="profilePicture"
            className="block text-sm font-medium mb-2"
          >
            Profile Picture:
          </label>
          <input
            type="file"
            id="profilePicture"
            onChange={(e) =>
              setFormData({
                ...formData,
                profilePicture: e.target.files[0],
              })
            }
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800 rounded-lg p-2"
          />
        </div>

        {/* About */}
        <div className="mb-4">
          <label htmlFor="about" className="block text-sm font-medium mb-2">
            About:
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800 rounded-lg p-2"
          ></textarea>
        </div>

        {/* Experience or Current Working */}
        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-sm font-medium mb-2"
          >
            Experience or Current Working:
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your experience or current role"
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800 rounded-lg p-2"
          ></textarea>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800 rounded-lg p-2"
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            How You Can Help (Tags):
          </label>
          <div className="flex flex-wrap gap-2">
            {tagOptions.map((tag) => (
              <div key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  id={tag}
                  name="tags"
                  value={tag}
                  checked={formData.tags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  className="mr-2"
                />
                <label htmlFor={tag}>{tag}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 ">
          <label className="block text-sm font-medium mb-2">
            Social Media Links:
          </label>
          <input
            type="url"
            name="facebook"
            value={formData.socialMedia.facebook}
            onChange={(e) =>
              setFormData({
                ...formData,
                socialMedia: {
                  ...formData.socialMedia,
                  facebook: e.target.value,
                },
              })
            }
            placeholder="Facebook Profile URL"
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800  rounded-lg p-2 mb-2"
          />
          <input
            type="url"
            name="twitter"
            value={formData.socialMedia.twitter}
            onChange={(e) =>
              setFormData({
                ...formData,
                socialMedia: {
                  ...formData.socialMedia,
                  twitter: e.target.value,
                },
              })
            }
            placeholder="Twitter Profile URL"
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800  rounded-lg p-2 mb-2"
          />
          <input
            type="url"
            name="linkedin"
            value={formData.socialMedia.linkedin}
            onChange={(e) =>
              setFormData({
                ...formData,
                socialMedia: {
                  ...formData.socialMedia,
                  linkedin: e.target.value,
                },
              })
            }
            placeholder="LinkedIn Profile URL"
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800  rounded-lg p-2"
          />
        </div>

        {/* Select Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Select Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full bg-blue-950 text-white border border-blue-200 hover:bg-blue-800 rounded-lg p-2"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpertForm;
