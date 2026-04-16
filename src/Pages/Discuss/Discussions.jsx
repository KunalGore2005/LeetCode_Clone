import React from "react";

const Discussions = () => {
  const posts = [
    {
      user: "Anonymous User",
      time: "4 hours ago",
      title: "Cloudflare | SSE | Bangalore | March 2026",
      content:
        "Cloudflare has started aggressively hiring in Bangalore as they have plans on expanding engineering teams in India...",
      votes: 8,
      views: 789,
      comments: 6,
    },
    {
      user: "SocialMediaGrowth",
      time: "an hour ago",
      title:
        "🚀 Smarter Breakdown: Start Coding, Choose Languages, and Follow a Clear Roadmap",
      content:
        "How to Start Coding from Scratch (Step-by-Step Detailed)...",
      votes: 2,
      views: 8,
      comments: 0,
    },
    {
      user: "Anonymous User",
      time: "5 hours ago",
      title:
        "can anyone share their resume which is always shortlist in PBCs",
      content:
        "hey there i want help i want to see the resume which is get shortlisted...",
      votes: 2,
      views: 319,
      comments: 2,
    },
    {
      user: "Froggy McFrogface",
      time: "4 hours ago",
      title:
        "Rubrik | Senior Engineering Manager | March 2026 | Rejected",
      content:
        "1st round (System Design) - Design a config store...",
      votes: 0,
      views: 246,
      comments: 0,
    },

    // 🔥 Added more (dummy but realistic)
    {
      user: "Coder123",
      time: "2 hours ago",
      title: "Best DSA roadmap for placements 2026?",
      content: "I am confused between Striver and Neetcode...",
      votes: 5,
      views: 120,
      comments: 3,
    },
    {
      user: "DevGuru",
      time: "6 hours ago",
      title: "Google vs Amazon interview difficulty",
      content: "Which one is harder in 2026 hiring season?",
      votes: 3,
      views: 210,
      comments: 4,
    },
    {
      user: "StudentX",
      time: "1 day ago",
      title: "How much DSA is enough?",
      content: "I have solved around 300 problems...",
      votes: 7,
      views: 400,
      comments: 5,
    },
    {
      user: "Anon",
      time: "3 hours ago",
      title: "System Design resources for beginners",
      content: "Can anyone suggest good YouTube channels?",
      votes: 4,
      views: 150,
      comments: 2,
    },
    {
      user: "Techie",
      time: "5 hours ago",
      title: "Is CP necessary for FAANG?",
      content: "I don’t enjoy competitive programming...",
      votes: 6,
      views: 300,
      comments: 3,
    },
    {
      user: "Learner",
      time: "2 days ago",
      title: "Best language for interviews?",
      content: "Python vs C++ vs Java — what to choose?",
      votes: 9,
      views: 500,
      comments: 7,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">

      {posts.map((post, index) => (
        <div
          key={index}
          className="py-4 border-b border-gray-200"
        >
          {/* 🔥 Header */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <span>{post.user}</span>
            <span>·</span>
            <span>{post.time}</span>
          </div>

          {/* 🔥 Title */}
          <h2 className="font-semibold text-lg mb-1 cursor-pointer hover:text-blue-600">
            {post.title}
          </h2>

          {/* 🔥 Content */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {post.content}
          </p>

          {/* 🔥 Actions */}
          <div className="flex gap-6 text-sm text-gray-500 mt-2">
            <span>⬆ {post.votes}</span>
            <span>👁 {post.views}</span>
            <span>💬 {post.comments}</span>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Discussions;