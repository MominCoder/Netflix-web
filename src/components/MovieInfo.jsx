import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const MovieInfo = () => {
  const movie = useSelector((store) => store.movies.selectedMovie);

  return (
    <div className="relative top-10 container mx-auto px-5 xl:px-0 py-10 grid md:grid-cols-3 grid-cols-1 gap-5 text-white">
      <figure className="col-span-2 sm:col-span-1 max-w-[200px]">
        <img
          src={IMG_CDN_URL + movie.poster_path}
          alt={movie.title}
          className="w-full"
        />
      </figure>
      <div className="col-span-2 sm:col-span-2">
        <h1 className="text-2xl sm:text-4xl font-bold text-shadow">
          {movie.title}
        </h1>
        <h2 className="my-2.5 font-normal txt-xl sm:text-lg text-gray-300">
          ({movie?.release_date.split("-")[0]})
        </h2>

        <div className="font-semibold my-2.5 flex flex-col sm:flex-row gap-1 sm:gap-2">
          <p>
            Released on : {movie?.release_date.split("-").reverse().join("/")}
          </p>
          <span className="hidden sm:block">•</span>
          <p>
            {movie.genres ? movie.genres.map((g) => g.name).join(", ") : ""}
          </p>
        </div>

        <p className="font-semibold text-md">
          ⭐<span>{movie?.vote_average.toFixed(1)}</span>
          /10
        </p>

        <div className="hidden sm:inline-block">
          <h3 className="my-2.5 text-white text-xl font-semibold">Overview</h3>
          <p className="text-white cursor-default text-sm sm:text-left sm:text-base">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
