import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import SideDrawer from "../SideDrawer/SideDrawer";
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleButton = () => {
    navigate("/expertform");
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="  bg-black opacity-95  text-white font-thin flex justify-evenly p-3">
        <h1 className="text-4xl p-3 font-bold">
          CreAid
          <span
            className="text-red-600 font-normal font-serif"
            style={{ textShadow: "0 0 3px red, 0 0 6px pink, 0 0 6px red" }}
          >
            X
          </span>
        </h1>
        <input
          className="w-1/3 m-1 flex items-center rounded-lg placeholder:p-9"
          placeholder="Search for experts ✒️"
        />{" "}
        <div className="flex justify-evenly px-6 gap-6 text-lg font-medium ">
          <button
            onClick={handleButton}
            className="filter brightness-75 hover:brightness-150 p-3"
          >
            Become an Expert
          </button>

          <button
            onClick={handleClick}
            className="filter brightness-75 hover:brightness-150 p-3"
          >
            Sign Up Now
          </button>
          <div className="p-3 mt-3" onClick={toggleDrawer}>
            <FaUserAlt />
          </div>
          <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
