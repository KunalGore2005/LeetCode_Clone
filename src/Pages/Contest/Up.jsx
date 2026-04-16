import React from "react";

const Up = () => {
  return (
    <div className="h-auto from-gray-100 to-gray-200 flex flex-col items-center py-10 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🏆</div>
        <h1 className="text-3xl font-semibold">LeetCode Contest</h1>
        <p className="text-gray-500 mt-2">
          Contest every week. Compete and see your ranking!
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-6 flex-wrap justify-center w-full max-w-5xl">

        {/* Card 1 */}
        <div className="w-95 rounded-3xl overflow-hidden shadow-lg">
          
          {/* Top Gradient */}
          <div className="h-45 rounded-t-3xl bg-[url('https://assets.leetcode.com/contest-config/contest/wc_card_img.png')] bg-cover bg-center relative">
            <div className="absolute top-3 right-3 bg-white/70 px-3 py-1 rounded-full text-sm">
                ⏳ 4d 15:18:29
            </div>
        </div>

          {/* Bottom */}
          <div className="bg-orange-100 p-4 flex justify-between items-center">
            <div>
                
              <h2 className="font-semibold text-lg">
                Weekly Contest 498
              </h2>
              <p className="text-sm text-gray-600">
                Sun, Apr 19, 08:00 GMT+05:30
              </p>
            </div>
            <div className="text-xl">⏰</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-95 rounded-3xl overflow-hidden shadow-lg">
          
          {/* Top Gradient */}
          <div className="h-45 rounded-t-3xl bg-[url('https://assets.leetcode.com/contest-config/contest/bc_card_img.png')] bg-cover bg-center relative">
            <div className="absolute top-3 right-3 bg-white/70 px-3 py-1 rounded-full text-sm">
                ⏳ 11d 15:18:29
            </div>
          </div>

          {/* Bottom */}
          <div className="bg-indigo-100 p-4 flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">
                Biweekly Contest 181
              </h2>
              <p className="text-sm text-gray-600">
                Sat, Apr 25, 20:00 GMT+05:30
              </p>
            </div>
            <div className="text-xl">⏰</div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-10 text-gray-500 text-sm">
        🤝 Sponsor a Contest
      </div>
    </div>
  );
};

export default Up;