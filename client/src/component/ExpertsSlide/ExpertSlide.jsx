import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
const ExpertSlide = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await axios.get("/api/experts");
        setExperts(res.data);
        console.log(experts, "data recieved", res);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5; // Show 5 cards at once

  // Function to show the next card (shift right)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experts.length);
  };

  // Function to show the previous card (shift left)
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + experts.length) % experts.length
    );
  };
  const userID = localStorage.getItem("id");
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    window.location.href = "https://calendly.com/cmtiwari70/new-meeting";
  };
  return (
    <>
      <div className="bg-black">
        {" "}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-3 rounded-lg text-white flex flex-wrap items-center justify-between shadow-lg">
          {/* Filter Section */}
          <div className="flex items-center space-x-4">
            <span className="font-bold">Filter</span>
            <select className="bg-cyan-600 text-white p-2 rounded focus:outline-none shadow-md">
              <option value="">All</option>
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-cyan-300 mx-6 hidden sm:block"></div>

          {/* Categories Section */}
          <div className="flex items-center space-x-4 overflow-x-auto">
            <span className="font-bold">Categories:</span>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-full shadow-md transition">
              Business
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-full shadow-md transition">
              Education
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-full shadow-md transition">
              Technology
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-full shadow-md transition">
              Health
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-full shadow-md transition">
              Lifestyle
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-black min-h-screen p-9 text-white">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex / visibleCards) * 100}%)`,
            }}
          >
            {/* Display 5 cards per slide */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full">
              {experts
                .slice(currentIndex, currentIndex + visibleCards)
                .map((expert) => (
                  <div
                    key={expert.id}
                    className="min-w-[18%] bg-cyan-950 border border-blue-400 rounded-md shadow-lg transition-all duration-300 hover:shadow-blue-500/50 m-2"
                  >
                    <div className="flex items-center justify-center">
                      {expert.profilePicture ? (
                        <img
                          src={`${expert.profilePicture}`}
                          alt={`${expert.name}'s Profile`}
                          className="w-60 h-60 rounded-md border-4 border-cyan-800 object-cover mt-3"
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
                    <p className="text-sm text-blue-200 text-center m-1">
                      {expert.about || "No description available."}
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleClick}
                        className="mb-3 w-auto bg-cyan-600 text-white py-2 px-6 rounded-full hover:border border-blue-300 shadow-lg"
                      >
                        Schedule Call Now
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute  left-5 top-1/3 text-3xl text-white transform -translate-y-1/2"
        >
          <IoIosArrowRoundBack />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/3 text-3xl text-white transform -translate-y-1/2"
        >
          <IoIosArrowRoundForward />
        </button>
      </div>
    </>
  );
};

export default ExpertSlide;
