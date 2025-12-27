import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSimilarMovies } from "../utils/moviesSlice";

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();

  const getSimilarMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addSimilarMovies(data?.results));
  };

  useEffect(() => {
    getSimilarMovies();
  }, [movieId]);
};

export default useSimilarMovies;
