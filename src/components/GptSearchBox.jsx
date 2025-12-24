import GptSearchInput from "./GptSearchInput";
import GptSearchSuggestion from "./GptSearchSuggestion";

const GptSearchBox = () => {
  return (
    <div className="relative h-screen">
      <figure className="fixed z-10">
        <img
          className="h-screen object-cover"
          src={"/public/assets/Login_BG_large.jpg"}
          alt="logo"
        />
      </figure>
      <div className="absolute left-0 top-1/2 z-30 w-full">
        <GptSearchInput />
        <GptSearchSuggestion />
      </div>
    </div>
  );
};

export default GptSearchBox;
