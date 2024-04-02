import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({ genreId, displaySelectedGenreName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      const data = resp.data.results;
      setGenreList(data);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold">Genre</h2>
      <div className="overflow-scroll overflow-x-hidden h-[100vh]">
        {genreList.map((item, index) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveGenre(index);
              genreId(item.id);
              displaySelectedGenreName(item.name);
            }}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg mr-5 group ${
              activeGenre === index ? "bg-gray-300 font-bold" : null
            }`}
          >
            <img
              src={item.image_background}
              alt="Game photos"
              className="h-[40px] w-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300"
            />
            <h3
              className={`group-hover:font-bold group-hover:p-1 transition-all ease-out duration-300 ${
                activeGenre === index ? "p-1" : null
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
