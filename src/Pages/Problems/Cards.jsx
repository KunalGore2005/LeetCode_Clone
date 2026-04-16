import React from "react";

const Cards = () => {
  const images = [
    "https://assets.leetcode.com/users/images/bbfe0fd2-0dfb-491a-b3c6-c6dc9f79c081_1776065243.555378.png",
    "https://assets.leetcode.com/users/images/af9f3173-d52d-4bfe-96b5-208bb3d8c141_1776064798.1168332.png",
    "https://assets.leetcode.com/users/images/bd93e07f-e341-4e6f-8258-6f2d639ed228_1776064826.4070387.png",
    "https://assets.leetcode.com/users/images/0efccc80-6f26-4eff-810e-7bcf5deb9cce_1776065123.7025018.png",
    "https://assets.leetcode.com/users/images/80dd0182-b2a1-4fdd-8459-b8a8e1a71ade_1776065045.8612857.png",
  ];

  return (
    <div className="w-220 overflow-x-auto">
      <div className="flex gap-4 min-w-max px-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-65 h-35 shrink-0 rounded-xl overflow-hidden"
          >
            <img
              src={img}
              alt="card"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;