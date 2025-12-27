import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMovieCastDetails } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieCast = (movieId) => {
  const dispatch = useDispatch();

  const getCastDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      API_OPTIONS
    );

    const data = await response.json();
    const filteredData = data.cast.filter((ele) => ele.profile_path !== null);
    dispatch(addMovieCastDetails(filteredData));
  };

  useEffect(() => {
    getCastDetails();
  }, [movieId]);
};

export default useMovieCast;
