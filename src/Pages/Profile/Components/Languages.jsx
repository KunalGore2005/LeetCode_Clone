import React from 'react'
import Langstat from './Langstat'
const Languages = () => {
  return (
    <div className='mb-5'>
        <h1 className='font-medium'>Languages</h1>
        <Langstat label="C++" no="490"/>
        <Langstat label="JavaScript" no="15"/>
        <Langstat label="Python3" no="3"/>
    </div>
  )
}

export default Languages