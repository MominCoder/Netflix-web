import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/constants";
import Header from "./Header";
import useSimilarMovies from "../hooks/useSimilarMovies";
import useMovieCast from "../hooks/useMovieCast";
import { useEffect } from "react";
import MovieList from "./MovieList";
import GptSearchBox from "./gptSearchBox";
import Cast from "./Cast";
import MovieInfo from "./MovieInfo";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  useMovieDetail(movieId);
  useMovieCast(movieId);
  useSimilarMovies(movieId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // optional
    });
  }, [movieId]);

  const movie = useSelector((store) => store.movies.selectedMovie);
  const similarMovies = useSelector((store) => store.movies.similarMovies);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  if (movie === null) return <Shimmer />;

  return (
    <>
      <Header />
      {showGptSearch && <GptSearchBox />}

      <>
        <div className="relative h-screen select-none text-white">
          <figure className="absolute top-0 left-0 brightness-50 overflow-hidden w-full h-full">
            <img
              alt="Backdrop_image"
              draggable={false}
              className="h-full w-full object-cover object-center"
              src={IMG_CDN_URL + movie.backdrop_path}
            />
          </figure>

          <MovieInfo />

          <Cast />

          {similarMovies && (
            <div className="py-7 bg-black relative">
              <div className="container mx-auto px-5 xl:px-0">
                <MovieList title={"You may also like"} movies={similarMovies} />
              </div>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default MovieDetailPage;
