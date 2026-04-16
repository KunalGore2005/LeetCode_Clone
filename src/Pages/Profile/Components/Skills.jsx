import React from 'react'
import SkillBlocks from './SkillBlocks'
const Skills = () => {
  return (
    <div>
        <h1 className='font-medium'>Skills</h1>
        <SkillBlocks heading="Advanced" arr={['Dynamic Programming', 'Divide and Conquer', 'Monotonic Stack', 'Backtracking', 'segment Tree'] }  />
        <SkillBlocks heading="Intermediate" arr={['Hash Table','Tree','Binary Tree','Greedy', 'Graph', 'Hashing', 'Two Pointers', 'Binary Search'] }  />
        <SkillBlocks heading="Fundamental" arr={['Array', 'String', 'Linked List', 'Stack', 'Queue'] }  />
    </div>
  )
}

export default Skills