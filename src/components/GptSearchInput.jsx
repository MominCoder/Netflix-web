import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addGptSearchResult } from "../utils/gptSlice";
import askAI from "../utils/geminiAi";

const GptSearchInput = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleGptSearch = async () => {
    const data = await askAI(inputRef.current.value)
    const searchResult = data.filter(Boolean)
    
    dispatch(addGptSearchResult(searchResult));
  };

  return (
    <div className="flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="AI Powered movies search"
          ref={inputRef}
          className="bg-white p-2 m-4 col-span-9 outline-0"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchInput;
