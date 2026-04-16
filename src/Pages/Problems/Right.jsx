import React from 'react'
import Calender from './Calender'
import Companies from './Companies'
const Right = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Calender />
      <Companies />
    </div>
  )
}

export default Right