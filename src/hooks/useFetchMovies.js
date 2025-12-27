import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovies = (selector, action, type) => {
  const dispatch = useDispatch();
  const movies = useSelector(selector);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?page=1`,
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(action(json.results));
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    !movies && fetchMovies();
  }, []);
};

export default useFetchMovies;
