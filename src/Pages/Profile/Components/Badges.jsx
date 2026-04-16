import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Badges = () => {
  const [badges, setBadges] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const res = await fetch(
          "https://alfa-leetcode-api.onrender.com/kunalgore_11/badges"
        );
        const data = await res.json();

        setBadges(data.badges || data || []);
      } catch (err) {
        console.error("Error fetching badges:", err);
      }
    };

    fetchBadges();
  }, []);

  const sortedBadges = [...badges].sort(
    (a, b) => new Date(b.creationDate || 0) - new Date(a.creationDate || 0)
  );

  const visibleBadges = sortedBadges.slice(0, 3);
  const latestBadge = sortedBadges[0];

  return (
    <div className="rounded-xl p-4 w-full max-w-md">
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600 text-sm">Badges</p>
          <p className="text-2xl font-semibold">{badges.length}</p>
        </div>

        <ArrowRight
          className="text-gray-500 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
      </div>

      <div className="flex justify-center items-center gap-6 my-4">
        {visibleBadges.map((badge, index) => (
          <img
            key={index}
            src={badge.icon}
            alt={badge.name}
            className="w-16 h-16 object-contain hover:scale-105 transition"
          />
        ))}
      </div>

      {latestBadge && (
        <div>
          <p className="text-gray-500 text-sm">Most Recent Badge</p>
          <p className="text-lg font-medium">{latestBadge.name}</p>
        </div>
      )}

      {showModal && (
        <BadgeModal
          badges={sortedBadges}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Badges;


const BadgeModal = ({ badges, onClose }) => {
  if (!badges || badges.length === 0) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose} // close on outside click
    >
      {/* Stop propagation so inner click doesn't close */}
      <div
        className="bg-white rounded-xl p-6 w-125 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Badge List</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {/* Badges Grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-20 hover:scale-105 transition"
            >
              <img
                src={badge.icon}
                alt={badge.name}
                className="w-14 h-14 object-contain"
              />

              <p className="text-xs text-center mt-1 truncate w-full">
                {badge.name}
              </p>

              {badge.creationDate && (
                <p className="text-[10px] text-gray-400">
                  {badge.creationDate}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};