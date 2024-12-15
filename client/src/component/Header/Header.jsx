import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ExpertSlide from "../ExpertsSlide/ExpertSlide";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/api/experts");
  };
  return (
    <>
      <div className="h-[80vh] bg-black text-white p-3 flex items-center justify-center flex-col">
        <p className="text-8xl font-medium text-center max-w-6xl m-3 text-cyan-400">
          Connect with <span className="text-white">our </span>Experts
        </p>{" "}
        <button
          onClick={handleClick}
          className="bg-teal-950 border border-teal-300 p-4 py-2 mt-6  transition transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,255,255,0.6)]  shadow-lg  rounded-lg"
        >
          Find Experts
        </button>
      </div>

      <div>
        <ExpertSlide />
      </div>
      <div className="bg-black">
        <p className="text-3xl text-white font-semibold p-3 text-center">
          Why Choose Us?
        </p>
        <div className="flex justify-evenly gap-6 p-6 bg-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
            {[
              {
                id: 1,
                title: "Monetization & Revenue Diversification",
                description:
                  "Unlock multiple income streams. Get strategies to monetize and expand your revenue in the digital space.",
              },
              {
                id: 2,
                title: "Algorithm Mastery",
                description:
                  "Beat the algorithm. Learn platform secrets to boost visibility and get your content trending.",
              },
              {
                id: 3,
                title: "Engagement Metrics Mastery",
                description:
                  "Increase your impact. Boost views, likes, and shares to build an engaged and loyal community.",
              },
              {
                id: 4,
                title: "Personal Branding",
                description:
                  "Stand out by being real. Build a brand that resonates and builds trust with your audience.",
              },
              {
                id: 5,
                title: "Ideation to Creation",
                description:
                  "From idea to impact. Discover your unique niche and receive step-by-step guidance to craft captivating content.",
              },
              {
                id: 6,
                title: "Burnout Prevention",
                description:
                  "Stay inspired, not exhausted. Learn techniques to manage stress and avoid burnout for sustainable growth.",
              },
            ].map((item, index) => (
              <div
                key={item.id}
                className="p-3 border-2 border-cyan-300 rounded-lg bg-cyan-800 backdrop-blur-lg w-full h-60 hover:bg-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
