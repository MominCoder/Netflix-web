import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useFetchMovies from "../hooks/useFetchMovies";
import {
  addNowPlayingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";
import GptSearchBox from "./gptSearchBox";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // useNowPlayingMovies();
  useFetchMovies(
    (store) => store.movies.popularMovies,
    addNowPlayingMovies,
    "now_playing"
  );
  useFetchMovies(
    (store) => store.movies.popularMovies,
    addUpcomingMovies,
    "upcoming"
  );
  useFetchMovies(
    (store) => store.movies.popularMovies,
    addTopRatedMovies,
    "top_rated"
  );
  // useFetchMovies((store) => store.movies.popularMovies, addPopularMovies, "popular");

  return (
    <div className="w-full">
      <div className="relative w-full">
        <Header />
      </div>
      {showGptSearch ? (
        <GptSearchBox />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
