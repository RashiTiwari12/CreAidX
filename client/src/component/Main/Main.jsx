import React from "react";

const Main = () => {
  return (
    <div className="h-[100vh] bg-black text-white flex justify-between p-9 ">
      <p className="text-6xl mx-12 p-3">
        <span
          className="text-cyan-300  "
          style={{ textShadow: "0 0 5px cyan, 0 0 10px cyan, 0 0 15px cyan" }}
        >
          1:1{" "}
        </span>
        interactions
      </p>
      <div className="flex flex-col p-3 m-3">
        {/* <img
          className="rounded-full h-60"
          src="https://cdn.pixabay.com/photo/2024/07/12/17/48/ai-generated-8890805_640.png"
        />
        <img
          className="rounded-full h-60 "
          src="https://cdn.pixabay.com/photo/2024/03/19/15/37/call-center-8643475_640.jpg"
        /> */}
        <img
          className="mr-60 rounded-lg border border-blue-300 shadow-lg"
          src="https://cdn.pixabay.com/photo/2020/09/30/09/36/phone-5615121_640.png"
        />
      </div>
    </div>
  );
};

export default Main;
