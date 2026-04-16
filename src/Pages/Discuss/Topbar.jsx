import React, { useState } from "react";

const Topbar = () => {
  const [activeTab, setActiveTab] = useState("For You");
  const [activeFilter, setActiveFilter] = useState("Most Votes");

  const tabs = [
    "For You",
    "Career",
    "Contest",
    "Compensation",
    "Feedback",
    "Interview",
  ];

  const filters = ["Most Votes", "Newest"];

  return (
    <div className="w-full px-4 py-3 my-10">

      {/* 🔥 Top Row */}
      <div className="flex justify-between items-center">

        {/* Tabs */}
        <div className="flex gap-6 items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm transition ${
                activeTab === tab
                  ? "bg-gray-100 px-3 py-1 rounded-full font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Create Button */}
        <button className="bg-green-600 text-white px-4 py-1.5 rounded-md flex items-center gap-2 hover:bg-green-700">
          ✏️ Create
        </button>
      </div>

      {/* 🔥 Bottom Row (Filters) */}
      <div className="flex gap-6 mt-3 text-sm text-gray-600">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center gap-1 ${
              activeFilter === filter
                ? "text-black font-medium"
                : "hover:text-black"
            }`}
          >
            {filter === "Most Votes" ? "⬆️" : "✨"}
            {filter}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Topbar;