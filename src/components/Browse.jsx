import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  useNowPlayingMovies();

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
