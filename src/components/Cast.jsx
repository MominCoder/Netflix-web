import { useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const Cast = () => {
  const castDetails = useSelector((store) => store.movies.castDetails);
  const [visibleCount, setVisibleCount] = useState(6);
  
  if (!castDetails) return;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    castDetails && (
      <div className="bg-black pt-10">
        <div className="container mx-auto px-5 xl:px-0 py-5">
          <h3 className="text-white text-xl relative z-10 mb-5">Cast</h3>
          <div className="flex gap-6 overflow-x-scroll items-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {castDetails.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="md:w-48 w-32 relative flex-shrink-0 rounded-xl overflow-hidden"
              >
                <figure className="w-full">
                  <img
                    className="w-full"
                    src={IMG_CDN_URL + item.profile_path}
                    alt={item.name}
                  />
                </figure>
                <p
                  className="absolute bottom-0 w-full px-3 py-2
                            bg-black/40 backdrop-blur-md text-white text-sm text-center"
                >
                  {item.name}
                </p>
              </div>
            ))}
            {visibleCount < castDetails.length && (
              <div className="flex justify-center mt-4 min-w-24">
                <button
                  onClick={handleViewMore}
                  className="bg-red-900 hover:bg-gray-700
                       rounded-lg transition text-white text-sm p-2 cursor-pointer"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Cast;
