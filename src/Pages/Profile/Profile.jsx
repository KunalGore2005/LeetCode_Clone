import React from 'react'
import Left from './Components/left'
import Right from './Components/Right'
const Profile = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 bg-gray-100 w-full'>
      <div className='flex justify-between w-full min-w-295 max-w-295'>
        <Left />
        <Right/>
      </div>
    </div>
  )
}

export default Profile