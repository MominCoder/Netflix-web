import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const disptach = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailer);

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
    getMovieTrailer();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
