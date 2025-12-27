import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/moviesSlice";

const useMovieDetail = (movieId) => {
  const dispatch = useDispatch();

  const getMovieDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );

      const data = await response.json();
      dispatch(addSelectedMovie(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetail(movieId);
  }, [movieId]);
};

export default useMovieDetail;
