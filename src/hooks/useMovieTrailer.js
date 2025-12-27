import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const disptach = useDispatch();
  const trailer = useSelector(store => store.movies.trailer)

  const getMovieTrailer = async () => {    
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];

    disptach(addTrailer(trailer));
  };

  useEffect(() => {
    !trailer && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
