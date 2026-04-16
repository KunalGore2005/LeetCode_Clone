import React, { useState } from "react";

const TopicTabs = () => {
  const tabs = [
    "All Topics",
    "Algorithms",
    "Database",
    "Shell",
    "Concurrency",
    "JavaScript",
  ];

  const [active, setActive] = useState("All Topics");

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 min-w-max">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition
              ${
                active === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicTabs;