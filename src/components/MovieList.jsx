import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-2 container mx-auto">
      <h2 className="text-2xl text-white font-semibold">{title}</h2>
      <div className="flex overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
