import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import Header from "./Header";
import useSimilarMovies from "../hooks/useSimilarMovies";
import useMovieCast from "../hooks/useMovieCast";
import { useState } from "react";
import MovieList from "./MovieList";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  useMovieDetail(movieId);
  useMovieCast(movieId);
  useSimilarMovies(movieId);

  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const movie = useSelector((store) => store.movies.selectedMovie);
  const castDetails = useSelector((store) => store.movies.castDetails);
  const similarMovies = useSelector((store) => store.movies.similarMovies);

  if (movie === null) return <Shimmer />;

  return (
    <>
      {/* <Header /> */}
      <div className="relative bg-black h-screen">
        <figure className="absolute top-0 left-0 brightness-50 overflow-hidden w-full h-full">
          <img
            alt="Backdrop_image"
            draggable={false}
            className="h-full w-full object-cover object-center"
            src={IMG_CDN_URL + movie.backdrop_path}
          />
        </figure>

        <div className="relative z-10 container mx-auto py-10 grid grid-cols-3 gap-5 text-white">
          <div className="col-span-2">
            <h1 className="text-4xl font-bold text-shadow select-none">
              {movie.title}
            </h1>
            <h2 className="my-2.5 font-normal txt-xl sm:text-lg text-gray-300">
              ({movie?.release_date.split("-")[0]})
            </h2>

            <div className="font-semibold my-2.5 flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:items-start justify-center sm:justify-start">
              <p>
                Released on :{" "}
                {movie?.release_date.split("-").reverse().join("/")}
              </p>
              <span className="hidden sm:block">•</span>
              <p>
                {movie.genres ? movie.genres.map((g) => g.name).join(", ") : ""}
              </p>
            </div>

            <div>
              <p className="font-semibold text-md">
                <span>{movie?.vote_average.toFixed(1)}</span>
                /10
              </p>
            </div>

            <div>
              <h3 className="my-2.5 text-white text-xl font-semibold">
                Overview
              </h3>
              <p className="text-white select-none cursor-default text-sm sm:text-left sm:text-base">
                {movie?.overview}
              </p>
            </div>
          </div>
          <figure className="max-w-[200px]">
            <img
              src={IMG_CDN_URL + movie.poster_path}
              alt={movie.title}
              className="w-full"
            />
          </figure>
        </div>

        {castDetails && (
          <div className="container mx-auto">
            <h3 className="text-white text-xl">Cast</h3>
            <div className="flex gap-2.5 overflow-x-scroll items-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {castDetails.slice(0, visibleCount).map((item) => (
                <div
                  key={item.id}
                  className="relative flex-shrink-0 w-[200px] h-[250px] rounded-xl overflow-hidden"
                >
                  <figure className="w-full">
                    <img
                      className="w-full"
                      src={IMG_CDN_URL + item.profile_path}
                      alt={item.name}
                    />
                  </figure>
                  <p
                    className="absolute bottom-0 w-full px-3 py-2
                            bg-black/40 backdrop-blur-md text-white text-sm text-center"
                  >
                    {item.name}
                  </p>
                </div>
              ))}
              {visibleCount < castDetails.length && (
                <div className="flex justify-center mt-4  min-w-24">
                  <button
                    onClick={handleViewMore}
                    className="bg-red-900 hover:bg-gray-700
                       rounded-lg transition text-white text-sm p-2 cursor-pointer"
                  >
                    View More
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {similarMovies && (
          <div className="my-7">
            <div className="container mx-auto">
              <MovieList title={"Use may also like"} movies={similarMovies} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetailPage;
