import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useFetchMovies from "../hooks/useFetchMovies";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";

const Browse = () => {
  // useNowPlayingMovies();
  useFetchMovies((store) => store.movies.popularMovies, addNowPlayingMovies, "now_playing");
  useFetchMovies((store) => store.movies.popularMovies, addUpcomingMovies, "upcoming");
  useFetchMovies((store) => store.movies.popularMovies, addTopRatedMovies, "top_rated");
  // useFetchMovies((store) => store.movies.popularMovies, addPopularMovies, "popular");

  return (
    <div className="w-full">
      <div className="relative w-full">
        <Header />
      </div>
      <MainContainer />
      <SecondContainer />
    </div>
  );
};

export default Browse;
