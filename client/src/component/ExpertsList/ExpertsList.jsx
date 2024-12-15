import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios (or use your custom api utility)
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoVideocamSharp } from "react-icons/io5";
// import ChatButton from "../chat/ChatButton";

const ExpertsList = () => {
  // State variables
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showChat, setShowChat] = useState(false);
  // Fetch data using useEffect
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await axios.get("https://creaidx.onrender.com/experts");
        setExperts(res.data); // Assuming res.data contains the list of experts
        console.log(experts, "data recieved", res);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);

  const userID = localStorage.getItem("id");
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    window.location.href = "https://calendly.com/cmtiwari70/new-meeting";
  };
  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Our Experts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="relative p-6 bg-blue-950 border border-blue-400 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50"
          >
            <div className="flex items-center justify-center mb-4">
              {expert.profilePicture ? (
                <img
                  src={`${expert.profilePicture}`}
                  alt={`${expert.name}'s Profile`}
                  className="w-36 h-36 rounded-full border-4 border-blue-400 object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-3">
              {expert.name}
            </h3>
            <p className="text-sm text-blue-200 text-center ">
              {expert.about || "No description available."}
            </p>
            <p className="text-blue-200 text-sm text-center mb-3">
              {expert.location}
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-blue-300">{expert.experience}</p>

              {expert.category && (
                <p className="text-blue-300">
                  <span className="bg-blue-900 text-white rounded-lg p-1 my-1 border border-blue-200">
                    {expert.category?.toUpperCase() || null}
                  </span>
                </p>
              )}
              <p className="text-blue-300">
                #
                {expert.tags && expert.tags.length > 0
                  ? expert.tags.join(", ")
                  : "None"}
              </p>
            </div>
            <div className="mt-3">
              {expert.socialMedia?.facebook && (
                <a
                  href={expert.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mr-4"
                >
                  Facebook
                </a>
              )}
              {expert.socialMedia?.twitter && (
                <a
                  href={expert.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mr-4"
                >
                  Twitter
                </a>
              )}
              {expert.socialMedia?.linkedin && (
                <a
                  href={expert.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
            <div className="flex text-blue-300 p-3 gap-9 ">
              {" "}
              {/* <ChatButton userId={userID} expertId={expert.id} /> */}
              <FaPhoneVolume className="hover:text-white" />
              <IoVideocamSharp className="hover:text-white" />
            </div>
            <button
              onClick={handleClick}
              className="mt-4 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:border border-blue-300 shadow-lg"
            >
              Make a Call
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsList;
