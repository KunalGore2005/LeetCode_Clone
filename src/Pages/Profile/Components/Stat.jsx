import React from 'react'

const Stat = (props) => {
  return (
    <div className='flex m-2'>
        <div className='flex items-center justify-center w-5 h-5 mr-3 text-gray-900'>
            {props.elem}
        </div>
        <div className='flex flex-col text-sm gap-1'>
            <h3 >{props.label} {props.labelno}</h3>
            <h4 className=' text-gray-500'>Last week {props.no}</h4>
        </div>
    </div>
  )
}

export default Stat