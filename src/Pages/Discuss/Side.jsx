import React from "react";

const Side = () => {
  const sections = [
    {
      title: "#Interview",
      items: [
        "Cloudflare | SSE | Bangalore | March ...",
        "Rubrik | Senior Engineering Manage...",
      ],
    },
    {
      title: "#Compensation",
      items: [
        "Cloudflare | SSE | Bangalore | March ...",
        "What should be optimal language f...",
      ],
    },
    {
      title: "#Career",
      items: [
        "How can I switch from SDET to SDE ?",
        "Vector and 3d geometry",
      ],
    },
    {
      title: "#Feedback",
      items: [
        "Dear Leetcode team, Update the dis...",
        "What should be optimal language f...",
      ],
    },
  ];

  return (
    <div className="w-full max-w-xs p-4">

      {/* 🔍 Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-full bg-gray-100 outline-none"
        />
      </div>

      {/* 🔥 Explore Card */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">

        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🧭</span>
          <h2 className="font-semibold text-lg">Explore</h2>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <div key={index}>
              
              <div className="text-sm text-gray-500 mb-1">
                {section.title}
              </div>

              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="text-sm py-1 hover:text-blue-500 cursor-pointer"
                >
                  {item}
                </div>
              ))}

            </div>
          ))}
        </div>

        {/* Show more */}
        <div className="mt-4 text-blue-500 text-sm cursor-pointer">
          Show More
        </div>
      </div>

      {/* 🔥 Footer */}
      <div className="mt-6 text-xs text-gray-500 flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <span>Support</span>
          <span>|</span>
          <span>Terms</span>
          <span>|</span>
          <span>Privacy Policy</span>
          <span>|</span>
          <span>More</span>
        </div>

        <div>Copyright © 2026 LeetCode</div>

        <div className="flex items-center gap-2">
          🇺🇸 <span>United States</span>
        </div>
      </div>

    </div>
  );
};

export default Side;