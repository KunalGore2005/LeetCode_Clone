const ExploreCard = ({ title, description, progress, problems, image }) => {
  return (
    <div className="w-65 bg-[#1e1e1e] rounded-xl p-4 hover:scale-105 transition-all duration-200 cursor-pointer">
      
      <div
        className="w-full h-32 rounded-lg bg-cover bg-center relative flex items-end p-3"
        style={{ backgroundImage: `url(${image})` }}
        >
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

        <h2 className="relative text-white text-lg font-semibold z-10">
            {title}
        </h2>
    </div>
      <div className="mt-3">
        <p className="text-gray-400 text-sm mt-1">{description}</p>

        <div className="flex justify-between items-center mt-3 text-sm text-gray-300">
          <span>{problems} problems</span>
          <span>{progress}</span>
        </div>

        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: progress }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;