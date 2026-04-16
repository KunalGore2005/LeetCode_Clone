import React from "react";

const Left = () => {
  const users = [
    { rank: 4, name: "小羊肖恩", rating: 3611, attended: 107 },
    { rank: 5, name: "何逊", rating: 3599, attended: 146 },
    { rank: 6, name: "Joshua Chen AU", rating: 3589, attended: 100 },
    { rank: 7, name: "Rohin Garg", rating: 3506, attended: 88 },
    { rank: 8, name: "SSerxhs", rating: 3499, attended: 61 },
    { rank: 9, name: "小羊肖恩", rating: 3490, attended: 50 },
    { rank: 10, name: "fmota BR", rating: 3453, attended: 65 },
  ];

  return (
    <div className="w-full max-w-md mx-auto">

      {/* 🔥 Podium Section */}
      <div className="flex justify-center items-end gap-4 mb-8">

        {/* 2nd */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center text-xl">
            👤
          </div>
          <div className="mt-2 bg-white px-4 py-2 rounded-xl shadow text-center">
            Neal Wu us
            <div className="text-sm text-gray-500">3686</div>
          </div>
        </div>

        {/* 1st (bigger) */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-2xl">
            🟡
          </div>
          <div className="mt-2 bg-white px-4 py-2 rounded-xl shadow text-center">
            <div className="font-semibold text-orange-500">Miruu</div>
            <div className="text-sm text-gray-500">3702</div>
          </div>
        </div>

        {/* 3rd */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center text-xl">
            👤
          </div>
          <div className="mt-2 bg-white px-4 py-2 rounded-xl shadow text-center">
            Yawn_Sean
            <div className="text-sm text-gray-500">3644</div>
          </div>
        </div>

      </div>

      {/* 🔥 List Section */}
      <div className="flex flex-col gap-4">

        {users.map((user) => (
          <div
            key={user.rank}
            className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                {user.rank}
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div className="font-medium">{user.name}</div>
            </div>

            {/* Right */}
            <div className="text-sm text-gray-600 text-right">
              <div>Rating: {user.rating}</div>
              <div>Attended: {user.attended}</div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Left;