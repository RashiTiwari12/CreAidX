import React from "react";
import { FaUserAlt } from "react-icons/fa";

const SideDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the drawer if it's not open
  const userID = localStorage.getItem("id");
  const userName = localStorage.getItem("username");
  const userEmail = localStorage.getItem("email");

  return (
    <div
      className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white w-80 p-6 rounded-l-lg flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()} // Prevent closing the drawer when clicking inside it
      >
        {/* User Info Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl text-black font-semibold mt-3">Welcome</h3>
          <div className="flex items-center space-x-3 mt-9">
            <FaUserAlt className="text-2xl text-gray-600" />
            <h2 className="text-lg text-black font-medium">{userName}</h2>
          </div>
          <h2 className="text-sm text-gray-600 mt-2">{userEmail}</h2>
        </div>

        {/* Close Button at the Bottom */}
        <button
          className="mt-6 py-2 px-4 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 self-center"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SideDrawer;
