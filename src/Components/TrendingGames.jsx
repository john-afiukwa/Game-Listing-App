import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
  return (
    <div className="hidden md:block mt-5">
      <h2 className="font-bold text-[30px]">Trending Games</h2>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={item.id}
                className="hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
              >
                <img
                  src={item.background_image}
                  className="h-[230px] rounded-t-lg object-cover"
                />
                <h2 className="bg-gray-400 text-[15px] font-bold rounded-b-lg p-2 flex justify-center">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
