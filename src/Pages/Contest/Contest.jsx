import React from 'react'
import Up from './Up'
import Left from './Left'
import Right from './Right'
const Contest = () => {
  return (
    <div>
      <Up />
      <div className='flex gap-6 px-4 mt-10 pb-10 max-w-5xl mx-auto'>
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default Contest