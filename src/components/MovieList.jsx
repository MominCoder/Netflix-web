import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="py-2">
      <h2 className="md:text-2xl text-white font-semibold mb-5">{title}</h2>
      <div className="flex overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4">
          {movies &&
            movies.map((movie) => (
              <Link key={movie?.id} to={"/movie/" + movie.id}>
                <MovieCard posterPath={movie?.poster_path} title={title} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
