import React from 'react'

const Langstat = (props) => {
  return (
    <div className='flex justify-between m-1'>
        <div>
            <button className='h-5 rounded-full text-xs px-1 mr-1 bg-gray-200'>{props.label}</button>
        </div>
        <div className='flex gap-1 justify-center items-center'>
            <div className='text-sm'>
                {props.no}
            </div>
            <h4 className='text-xs text-gray-600'>problems solved</h4>
        </div>
    </div>
  )
}

export default Langstat