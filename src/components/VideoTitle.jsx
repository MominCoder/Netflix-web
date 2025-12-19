const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white bg-gradient-to-r from-black px-5 absolute top-0 left-0 z-10 h-full flex items-center">
      <div className="">
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
        <div>
          <button className="hover:bg-opacity-50 bg-white text-black py-2.5 px-4 text-xl rounded-lg cursor-pointer">Play</button>
          <button className="hidden md:inline-block mx-2 bg-gray-500 text-white py-2.5 px-4 text-xl hover:bg-opacity-50 rounded-lg cursor-pointer">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
