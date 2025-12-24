import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GptSearchSuggestion = () => {
  const searchResults = useSelector((store) => store.gpt.searchResults); 
  
  if (!searchResults) return <p className="text-white text-center text-md">**Please search only movies**</p>;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <MovieList title={"Search results"} movies={searchResults} />
    </div>
  );
};

export default GptSearchSuggestion;
