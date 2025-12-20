import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-28 relative z-30">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
      </div>
    </div>
  );
};

export default SecondContainer;
