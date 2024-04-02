import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GameList from "../Components/GameList";

const Home = () => {
  const [gameList, setGameList] = useState();
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");

  useEffect(() => {
    getGames();
    getGamesListById(4);
  }, []);

  const getGames = () => {
    GlobalApi.getGameList.then((resp) => {
      const gamesData = resp.data.results;
      setGameList(gamesData);
    });
  };

  const getGamesListById = (id) => {
    GlobalApi.getGameListById(id).then((resp) => {
      const allGames = resp.data.results;
      setGameListByGenre(allGames);
    });
  };

  return (
    <section className="grid grid-cols-4 px-5 py-4">
      <div className="h-full hidden md:block">
        <GenreList
          genreId={(genreId) => getGamesListById(genreId)}
          displaySelectedGenreName={(name) => setSelectedGenreName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {gameList?.length > 0 && gameListByGenre.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[0]} />
            <TrendingGames gameList={gameList} />
            <GameList
              allGamesList={gameListByGenre}
              displaySelectedGenreName={selectedGenreName}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Home;
