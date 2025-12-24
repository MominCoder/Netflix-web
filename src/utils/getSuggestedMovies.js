import { API_OPTIONS } from "./constants";

const getSuggestedMovies = async (movie, release_year) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&primary_release_year=" +
      release_year +
      "&page=1",
    API_OPTIONS
  );
  const json = await data.json();

  return json.results;
};

export default getSuggestedMovies;
