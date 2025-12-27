import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies.nowPlayingMovies);
  if(!movies) return <Shimmer />

  const mainMovie = movies[0];
  const {title, overview, id} = mainMovie

  return (
    <div className="relative">
      <VideoBackground movieId = {id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
