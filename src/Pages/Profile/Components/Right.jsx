import React from 'react'
import './Right.css'
import Badges from './Badges'
const Right = () => {
  return (
    <div className='flex flex-col gap-3 w-182/260'>
        <div className='box w-full rounded-2xl'></div>
        <div className='flex justify-between gap-3'>
            <div className='flex justify-center items-center box w-1/2 rounded-2xl'>
              <img
                src="https://leetcard.jacoblin.cool/kunalgore_11?theme=dark&font=Karma"
                alt="LeetCode Stats"
                
              />
            </div>
            <div className='box w-1/2 rounded-2xl'>
              <Badges/>
            </div>
        </div>
        <div className='box w-full rounded-2xl'></div>
        <div className='box min-h-screen w-full rounded-2xl'></div>
    </div>
  )
}

export default Right