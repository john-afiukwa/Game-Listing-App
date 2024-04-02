import React, { useEffect } from "react";

const Banner = ({ gameBanner }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-4 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1 hover:font-bold hover:scale-110 transition-all ease-in-out duration-500">
          Get Now
        </button>
      </div>

      <img
        src={gameBanner.background_image}
        alt="Game Banner"
        className="md:h-[320px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default Banner;
