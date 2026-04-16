import React, { useState } from "react";

const Topics = () => {
  const [expanded, setExpanded] = useState(false);

  const topics = [
    { name: "Array", count: 2141 },
    { name: "String", count: 867 },
    { name: "Hash Table", count: 808 },
    { name: "Math", count: 666 },
    { name: "Dynamic Programming", count: 652 },
    { name: "Sorting", count: 512 },
    { name: "Greedy", count: 460 },
    { name: "Depth-First Search", count: 337 },
    { name: "Binary Search", count: 333 },
    { name: "Database", count: 310 },
    { name: "Bit Manipulation", count: 281 },
    { name: "Matrix", count: 273 },
    { name: "Tree", count: 261 },
    { name: "Breadth-First Search", count: 255 },
    { name: "Two Pointers", count: 251 },
    { name: "Prefix Sum", count: 242 },
    { name: "Heap (Priority Queue)", count: 214 },
    { name: "Simulation", count: 207 },
    { name: "Counting", count: 203 },
    { name: "Graph Theory", count: 181 },
  ];

  // show limited items initially
  const visibleTopics = expanded ? topics : topics.slice(0, 7);

  return (
    <div className="w-220 mt-5 mb-5">
      <div className="flex flex-wrap gap-0.5 items-center">
        {visibleTopics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center gap-0.5 px-1 py-1 bg-gray-100 rounded-full text-sm"
          >
            <span>{topic.name}</span>
            <span className="text-gray-500 text-xs bg-gray-200 px-2 py-0.5 rounded-full">
              {topic.count}
            </span>
          </div>
        ))}

        {/* Expand / Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-gray-500 hover:text-black"
        >
          {expanded ? "Collapse ▲" : "Expand ▼"}
        </button>
      </div>
    </div>
  );
};

export default Topics;