import React from "react";
import image from "../images/beamLoading.png";
const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col items-center my-8">
      <div className="w-[300px] duration-1000 rounded-full animate-bounce ">
        <img src={image} alt="" loading="eager" />
      </div>
      <p className="text-red-500 text-4xl font-bold">Loading...</p>
    </div>
  );
};

export default Loading;
