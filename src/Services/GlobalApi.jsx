import axios from "axios";

const key = "325e07b3fd874ce2a78d468d27533b29";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getGameList = axiosCreate.get("/games?key=" + key);
const getGameListById = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getGameList,
  getGameListById,
};
