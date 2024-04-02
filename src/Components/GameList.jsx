import React from "react";

const GameList = ({ allGamesList, displaySelectedGenreName }) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] mt-5">{displaySelectedGenreName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {allGamesList.map((item) => (
          <div
            key={item.id}
            className="h-[300px] bg-gray-400 p-3 rounded-lg pb-5 hover:scale-105 transition-all ease-in-out duration-700 cursor-pointer"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="mt-1 flex items-center gap-2 text-[15px] font-bold">
              {item.name}
              <span className="bg-gray-800 text-white px-1 rounded-sm">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-600 flex items-center">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
