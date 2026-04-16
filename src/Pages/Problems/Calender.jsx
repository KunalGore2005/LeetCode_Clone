import { useState } from "react";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const DOWS = ["S","M","T","W","T","F","S"];

const DEFAULT_SOLVED = {
  "2026-04-01": true,
  "2026-04-02": true,
  "2026-04-03": true,
  "2026-04-05": true,
  "2026-04-06": true,
  "2026-04-12": true,
  "2026-04-13": true,
};

function pad(n) {
  return String(n).padStart(2, "0");
}

function dateKey(y, m, d) {
  return `${y}-${pad(m + 1)}-${pad(d)}`;
}

export default function Calender({ solved = DEFAULT_SOLVED }) {
  const today = new Date();
  const [current, setCurrent] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const y = current.getFullYear();
  const m = current.getMonth();

  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  const prev = () => setCurrent(new Date(y, m - 1, 1));
  const next = () => setCurrent(new Date(y, m + 1, 1));

  const monthSolved = Object.keys(solved).filter((k) =>
    k.startsWith(`${y}-${pad(m + 1)}`)
  ).length;

  let streak = 0;
  for (let i = 0; i < 60; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const k = dateKey(d.getFullYear(), d.getMonth(), d.getDate());
    if (solved[k]) streak++;
    else if (i > 0) break;
  }

  return (
    <div className="w-70 font-sans select-none bg-white p-2 rounded-lg shadow dark:bg-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
          {MONTHS[m]} {y}
        </span>
        <div className="flex gap-1">
          <button
            onClick={prev}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 px-1 text-lg leading-none"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 px-1 text-lg leading-none"
          >
            ›
          </button>
        </div>
      </div>

      {/* Day-of-week labels */}
      <div className="grid grid-cols-7 text-center mb-1">
        {DOWS.map((d, i) => (
          <span key={i} className="text-[11px] text-gray-400 pb-1">
            {d}
          </span>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
          const k = dateKey(y, m, d);
          const isToday =
            today.getFullYear() === y &&
            today.getMonth() === m &&
            today.getDate() === d;
          const isSolved = !!solved[k];

          return (
            <div key={d} className="flex justify-center">
              <div
                className={`
                  w-7.5 h-7.5 flex items-center justify-center
                  text-xs rounded-full cursor-pointer relative
                  ${isToday
                    ? "bg-[#ffa116] text-white font-medium"
                    : isSolved
                    ? "text-[#ffa116] font-medium"
                    : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                `}
              >
                {d}
                {isSolved && !isToday && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ffa116]" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer streak row */}
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-400">Current streak</span>
        <span className="text-xs font-medium text-gray-800 dark:text-gray-100">
          {streak} {streak === 1 ? "day" : "days"}
        </span>
        <span className="text-xs text-gray-400 ml-auto">Total solved</span>
        <span className="text-xs font-medium text-gray-800 dark:text-gray-100">
          {monthSolved}
        </span>
      </div>
    </div>
  );
}