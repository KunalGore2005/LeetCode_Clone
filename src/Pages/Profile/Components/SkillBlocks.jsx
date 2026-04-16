import React from 'react'
import { useState } from 'react';

const SkillBlocks = (props) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? props.arr : props.arr.slice(0, 3);

  return (
    <div className='flex flex-col gap-2 my-1'>
      <div>
        {props.heading}
      </div>

      <div>
        {visibleItems.map((elem, index) => (
          <button key={index} className='h-5 rounded-full text-xs px-1 m-1 bg-gray-200'>
            {elem}
          </button>
        ))}
      </div>

      {props.arr.length > 3 && (
        <button
          onClick={() => setShowAll(prev => !prev)}
          className='text-xs text-gray-500 cursor-pointer'
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      )}
    </div>
  )
}

export default SkillBlocks