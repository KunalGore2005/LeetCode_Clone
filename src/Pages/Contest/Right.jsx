import React, { useState } from "react";

const Right = () => {
  const [activeTab, setActiveTab] = useState("Past");

  const contests = [
    { title: "Weekly Contest 497", date: "Sun, Apr 12, 08:00 GMT+05:30", progress: "2 / 4" },
    { title: "Biweekly Contest 180", date: "Sat, Apr 11, 20:00 GMT+05:30", progress: "4 / 4" },
    { title: "Weekly Contest 496", date: "Sun, Apr 5, 08:00 GMT+05:30", progress: "0 / 4" },
    { title: "Weekly Contest 495", date: "Sun, Mar 29, 08:00 GMT+05:30", progress: "0 / 4" },
    { title: "Biweekly Contest 179", date: "Sat, Mar 28, 20:00 GMT+05:30", progress: "2 / 4" },
    { title: "Weekly Contest 494", date: "Sun, Mar 22, 08:00 GMT+05:30", progress: "2 / 4" },
    { title: "Weekly Contest 493", date: "Sun, Mar 15, 08:00 GMT+05:30", progress: "2 / 4" },
    { title: "Biweekly Contest 178", date: "Sat, Mar 14, 20:00 GMT+05:30", progress: "3 / 4" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow">

      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-6">

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-full p-1">
          {["Past", "My"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full text-sm transition ${
                activeTab === tab
                  ? "bg-white shadow text-black"
                  : "text-gray-500"
              }`}
            >
              {tab} Contests
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="w-10 h-10 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white cursor-pointer">
          ⚙️
        </div>
      </div>

      {/* 🔥 Contest List */}
      <div className="flex flex-col gap-4">

        {contests.map((contest, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              
              {/* Thumbnail */}
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-yellow-300 to-orange-500"></div>

              {/* Info */}
              <div>
                <div className="font-medium">{contest.title}</div>
                <div className="text-sm text-gray-500">{contest.date}</div>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

              {/* Progress */}
              <div
                className={`px-3 py-1 rounded-full text-xs ${
                  contest.progress === "4 / 4"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {contest.progress}
              </div>

              {/* Virtual Badge */}
              <div className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-600">
                Virtual
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* 🔥 Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6 text-sm">

        <button className="px-2 py-1 bg-gray-100 rounded">{"<"}</button>

        <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
        <button className="px-3 py-1 bg-gray-100 rounded">2</button>
        <button className="px-3 py-1 bg-gray-100 rounded">3</button>
        <button className="px-3 py-1 bg-gray-100 rounded">4</button>
        <span>...</span>
        <button className="px-3 py-1 bg-gray-100 rounded">86</button>

        <button className="px-2 py-1 bg-gray-100 rounded">{">"}</button>

      </div>
    </div>
  );
};

export default Right;