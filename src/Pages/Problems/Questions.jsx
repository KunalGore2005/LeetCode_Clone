import { useState, useMemo } from "react";
import { Search, ArrowUpDown, Filter } from "lucide-react";

const PROBLEMS = [
  [1, "Two Sum", 57.3, "Easy"],
  [2, "Add Two Numbers", 48.3, "Medium"],
  [3, "Longest Substring Without Repeating Characters", 38.8, "Medium"],
  [4, "Median of Two Sorted Arrays", 46.3, "Hard"],
  [5, "Longest Palindromic Substring", 37.6, "Medium"],
  [6, "Zigzag Conversion", 53.9, "Medium"],
  [7, "Reverse Integer", 31.7, "Medium"],
  [8, "String to Integer (atoi)", 20.8, "Medium"],
  [9, "Palindrome Number", 60.4, "Easy"],
  [10, "Regular Expression Matching", 30.7, "Hard"],
  [11, "Container With Most Water", 59.8, "Medium"],
  [12, "Integer to Roman", 70.8, "Medium"],
  [13, "Roman to Integer", 66.5, "Easy"],
  [14, "Longest Common Prefix", 47.4, "Easy"],
  [15, "3Sum", 38.2, "Medium"],
  [16, "3Sum Closest", 47.1, "Medium"],
  [17, "Letter Combinations of a Phone Number", 65.3, "Medium"],
  [18, "4Sum", 42.5, "Medium"],
  [19, "Remove Nth Node From End of List", 62.7, "Medium"],
  [20, "Valid Parentheses", 74.2, "Easy"],
  [21, "Merge Two Sorted Lists", 73.6, "Easy"],
  [22, "Generate Parentheses", 79.4, "Medium"],
  [23, "Merge k Sorted Lists", 57.2, "Hard"],
  [24, "Swap Nodes in Pairs", 68.4, "Medium"],
  [25, "Reverse Nodes in k-Group", 64.8, "Hard"],
  [26, "Remove Duplicates from Sorted Array", 75.1, "Easy"],
  [27, "Remove Element", 58.3, "Easy"],
  [28, "Find the Index of the First Occurrence in a String", 45.2, "Easy"],
  [29, "Divide Two Integers", 22.1, "Medium"],
  [30, "Substring with Concatenation of All Words", 31.5, "Hard"],
  [31, "Next Permutation", 44.7, "Medium"],
  [32, "Longest Valid Parentheses", 38.9, "Hard"],
  [33, "Search in Rotated Sorted Array", 60.2, "Medium"],
  [34, "Find First and Last Position of Element in Sorted Array", 48.8, "Medium"],
  [35, "Search Insert Position", 71.6, "Easy"],
  [36, "Valid Sudoku", 64.2, "Medium"],
  [37, "Sudoku Solver", 67.5, "Hard"],
  [38, "Count and Say", 52.3, "Medium"],
  [39, "Combination Sum", 76.8, "Medium"],
  [40, "Combination Sum II", 56.2, "Medium"],
  [41, "First Missing Positive", 40.1, "Hard"],
  [42, "Trapping Rain Water", 63.4, "Hard"],
  [43, "Multiply Strings", 44.6, "Medium"],
  [44, "Wildcard Matching", 29.8, "Hard"],
  [45, "Jump Game II", 64.7, "Medium"],
  [46, "Permutations", 81.3, "Medium"],
  [47, "Permutations II", 68.9, "Medium"],
  [48, "Rotate Image", 78.2, "Medium"],
  [49, "Group Anagrams", 72.5, "Medium"],
  [50, "Pow(x, n)", 36.2, "Medium"],
  [51, "N-Queens", 72.8, "Hard"],
  [52, "N-Queens II", 79.1, "Hard"],
  [53, "Maximum Subarray", 67.5, "Medium"],
  [54, "Spiral Matrix", 51.3, "Medium"],
  [55, "Jump Game", 46.8, "Medium"],
  [56, "Merge Intervals", 48.1, "Medium"],
  [57, "Insert Interval", 40.2, "Medium"],
  [58, "Length of Last Word", 55.4, "Easy"],
  [59, "Spiral Matrix II", 75.3, "Medium"],
  [60, "Permutation Sequence", 48.7, "Hard"],
  [61, "Rotate List", 38.9, "Medium"],
  [62, "Unique Paths", 68.5, "Medium"],
  [63, "Unique Paths II", 44.1, "Medium"],
  [64, "Minimum Path Sum", 71.2, "Medium"],
  [65, "Valid Number", 19.8, "Hard"],
  [66, "Plus One", 70.4, "Easy"],
  [67, "Add Binary", 60.1, "Easy"],
  [68, "Text Justification", 44.3, "Hard"],
  [69, "Sqrt(x)", 41.8, "Easy"],
  [70, "Climbing Stairs", 73.5, "Easy"],
  [71, "Simplify Path", 46.2, "Medium"],
  [72, "Edit Distance", 56.8, "Medium"],
  [73, "Set Matrix Zeroes", 58.7, "Medium"],
  [74, "Search a 2D Matrix", 52.3, "Medium"],
  [75, "Sort Colors", 65.4, "Medium"],
  [76, "Minimum Window Substring", 43.1, "Hard"],
  [77, "Combinations", 71.8, "Medium"],
  [78, "Subsets", 81.4, "Medium"],
  [79, "Word Search", 44.6, "Medium"],
  [80, "Remove Duplicates from Sorted Array II", 61.3, "Medium"],
  [81, "Search in Rotated Sorted Array II", 38.5, "Medium"],
  [82, "Remove Duplicates from Sorted List II", 47.2, "Medium"],
  [83, "Remove Duplicates from Sorted List", 57.8, "Easy"],
  [84, "Largest Rectangle in Histogram", 46.1, "Hard"],
  [85, "Maximal Rectangle", 47.3, "Hard"],
  [86, "Partition List", 58.2, "Medium"],
  [87, "Scramble String", 38.9, "Hard"],
  [88, "Merge Sorted Array", 52.7, "Easy"],
  [89, "Gray Code", 65.3, "Medium"],
  [90, "Subsets II", 63.7, "Medium"],
  [91, "Decode Ways", 34.5, "Medium"],
  [92, "Reverse Linked List II", 48.2, "Medium"],
  [93, "Restore IP Addresses", 49.1, "Medium"],
  [94, "Binary Tree Inorder Traversal", 77.4, "Easy"],
  [95, "Unique Binary Search Trees II", 62.1, "Medium"],
  [96, "Unique Binary Search Trees", 61.5, "Medium"],
  [97, "Interleaving String", 40.8, "Medium"],
  [98, "Validate Binary Search Tree", 33.2, "Medium"],
  [99, "Recover Binary Search Tree", 54.7, "Medium"],
  [100, "Same Tree", 62.9, "Easy"],
];

const DIFF_COLORS = {
  Easy: "text-[#00b8a3]",
  Medium: "text-[#ffa116]",
  Hard: "text-[#ff375f]",
};

const FILTERS = ["All", "Easy", "Medium", "Hard"];

export default function Questions() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() =>
    PROBLEMS.filter((p) => {
      const matchDiff = filter === "All" || p[3] === filter;
      const matchSearch =
        p[1].toLowerCase().includes(search.toLowerCase()) ||
        String(p[0]).includes(search);
      return matchDiff && matchSearch;
    }),
    [search, filter]
  );

  return (
    <div className="w-220 font-sans py-4">

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1.5 bg-white dark:bg-gray-900">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions"
              className="text-xs bg-transparent outline-none w-36 text-gray-700 dark:text-gray-200 placeholder-gray-400"
            />
          </div>
          <button className="border border-gray-200 dark:border-gray-700 rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ArrowUpDown className="w-3.5 h-3.5" />
          </button>
          <button className="border border-gray-200 dark:border-gray-700 rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Solved count */}
        <span className="text-xs text-gray-500 dark:text-gray-400">
          <span className="text-gray-800 dark:text-gray-100 font-medium">
            {filtered.length}
          </span>
          /{PROBLEMS.length} Solved
        </span>
      </div>

      {/* Difficulty filter pills */}
      <div className="flex gap-2 flex-wrap mb-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
              filter === f
                ? "bg-[#ffa116] text-white border-[#ffa116]"
                : "border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <tbody>
          {filtered.map(([id, title, acc, diff]) => (
            <tr
              key={id}
              className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
            >
              <td className="py-2.5 px-2 text-xs text-gray-400 w-8">{id}.</td>
              <td className="py-2.5 px-2 text-sm text-gray-800 dark:text-gray-100 hover:text-[#ffa116]">
                {title}
              </td>
              <td className="py-2.5 px-2 text-xs text-gray-400 text-right whitespace-nowrap">
                {acc.toFixed(1)}%
              </td>
              <td className={`py-2.5 px-2 text-xs font-medium text-right whitespace-nowrap ${DIFF_COLORS[diff]}`}>
                {diff}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}