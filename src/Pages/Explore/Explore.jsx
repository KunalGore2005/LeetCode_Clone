import ExploreCard from "./ExploreCard";

const exploreData = [
  {
    title: "Array",
    description: "Learn array fundamentals",
    progress: "20%",
    problems: 40,
    image: "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png"
  },
  {
    title: "Graph",
    description: "Master graph algorithms",
    progress: "0%",
    problems: 35,
    image: "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png"
  },
  {
    title: "Dynamic Programming",
    description: "Optimize your solutions",
    progress: "10%",
    problems: 50,
    image: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png"
  },

  // 🔥 Added below

  {
    title: "Binary Tree",
    description: "Understand tree traversals and recursion",
    progress: "35%",
    problems: 45,
    image: "https://assets.leetcode.com/explore/cards/top-interview-questions-easy/img-1652222288.png"
  },
  {
    title: "Greedy Algorithms",
    description: "Solve problems with optimal choices",
    progress: "5%",
    problems: 30,
    image: "https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png"
  },
  {
    title: "Sliding Window",
    description: "Efficient subarray and substring techniques",
    progress: "15%",
    problems: 25,
    image: "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png"
  },
  {
    title: "Backtracking",
    description: "Explore all possibilities recursively",
    progress: "10%",
    problems: 28,
    image: "https://assets.leetcode.com/explore/cards/recursion-i/img-1652222288.png"
  },
  {
    title: "Heap & Priority Queue",
    description: "Master top-k and scheduling problems",
    progress: "8%",
    problems: 32,
    image: "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png"
  },
  {
    title: "Bit Manipulation",
    description: "Solve problems using binary tricks",
    progress: "2%",
    problems: 20,
    image: "https://assets.leetcode.com/explore/cards/bit-manipulation/img-1652222288.png"
  }
];

const Explore = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      
      <h1 className="text-white text-2xl font-bold mb-6">
        Explore
      </h1>

      <div className="flex flex-wrap gap-6">
        {exploreData.map((item, index) => (
          <ExploreCard key={index} {...item} />
        ))}
      </div>

    </div>
  );
};

export default Explore;