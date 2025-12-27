import GptSearchInput from "./GptSearchInput";
import GptSearchSuggestion from "./GptSearchSuggestion";

const GptSearchBox = () => {
  return (
    <div className="relative h-screen">
      <figure className="fixed z-10 w-full">
        <img
          className="h-screen object-cover w-full"
          src="/assets/Login_BG_large.jpg"
          alt="logo"
        />
      </figure>
      <div className="absolute left-0 top-2/12 z-30 w-full">
        <GptSearchInput />
        <GptSearchSuggestion />
      </div>
    </div>
  );
};

export default GptSearchBox;
