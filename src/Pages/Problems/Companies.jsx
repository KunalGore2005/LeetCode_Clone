import { useState } from "react";

const DEFAULT_COMPANIES = [
  { name: "Amazon", count: 1965 },
  { name: "Uber", count: 361 },
  { name: "Meta", count: 1384 },
  { name: "Apple", count: 312 },
  { name: "Google", count: 2253 },
  { name: "Microsoft", count: 1375 },
  { name: "Bloomberg", count: 1177 },
  { name: "LinkedIn", count: 179 },
  { name: "TikTok", count: 357 },
  { name: "Adobe", count: 158 },
  { name: "Airbnb", count: 62 },
  { name: "Nvidia", count: 134 },
  { name: "Goldman Sachs", count: 260 },
  { name: "Salesforce", count: 193 },
  { name: "Citadel", count: 91 },
  { name: "Capital One", count: 61 },
  { name: "Walmart Labs", count: 143 },
  { name: "Pinterest", count: 44 },
  { name: "Netflix", count: 30 },
  { name: "tcs", count: 217 },
];

export default function Companies({ companies = DEFAULT_COMPANIES }) {
  const [search, setSearch] = useState("");

  const filtered = search
    ? companies.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    : companies;

  return (
    <div className="w-70 font-sans select-none bg-white p-2 rounded-lg shadow dark:bg-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
          Trending Companies
        </span>
        <div className="flex gap-1">
          <button className="border border-gray-200 dark:border-gray-700 rounded-md px-2 py-0.5 text-sm text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
            ‹
          </button>
          <button className="border border-gray-200 dark:border-gray-700 rounded-md px-2 py-0.5 text-sm text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
            ›
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 mb-4 bg-white dark:bg-gray-900">
        <svg
          width="14" height="14" viewBox="0 0 16 16"
          fill="none" className="text-gray-400 shrink-0"
        >
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a company..."
          className="text-xs bg-transparent outline-none w-full text-gray-700 dark:text-gray-200 placeholder-gray-400"
        />
      </div>

      {/* Chips */}
      {filtered.length === 0 ? (
        <p className="text-xs text-gray-400 py-2">No companies found.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {filtered.map((c) => (
            <div
              key={c.name}
              className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <span className="text-xs text-gray-700 dark:text-gray-200">
                {c.name}
              </span>
              <span className="bg-[#ffa116] text-white text-[11px] font-medium rounded-full px-2 py-0.5">
                {c.count.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}