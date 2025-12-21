import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="container mx-auto max-w-[90%] md:max-w-[96%]">
        <div className="mt-0 lg:-mt-16 relative z-30">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
