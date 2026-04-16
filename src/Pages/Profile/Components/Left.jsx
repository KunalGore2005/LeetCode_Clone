import React from 'react'
import User from './User'
import CommunityStates from './CommunityStates'
import Languages from './Languages'
import Skills from './Skills'
const Left = () => {
  return (
    <div className='flex flex-col w-7/26 '>
        <User/>
        <hr className='text-gray-300 mb-5'/>
        <CommunityStates />
        <hr className='text-gray-300 mb-5'/>
        <Languages />
        <hr className='text-gray-300 mb-5'/>
        <Skills />
    </div>
  )
}

export default Left