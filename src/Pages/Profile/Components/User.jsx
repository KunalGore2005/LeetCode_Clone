import React from 'react'
import { MapPin, GraduationCap,Tag  } from 'lucide-react';
const User = () => {
  return (
    <div className='w-full mb-5'>
        <div className='flex justify-items-start '>
            <img src="https://assets.leetcode.com/users/kunalgore_11/avatar_1766291992.png" alt="User Avatar" className='rounded-2xl w-[2cm] h-[2cm]'/>
            <div className='flex flex-col justify-between ml-5'>
                <div>
                    <h2 className='font-medium'>Kunal Gore</h2>
                    <p className='text-xs text-gray-500'>kunalgore_11</p>
                </div>
                <div className='flex gap-1 mb-1'><p className='text-gray-500'>Rank</p> 180,475</div>
            </div>
        </div>
        <div className='flex gap-5 mt-3 text-gray-500'>
            <button className='cursor-pointer'>Following</button>
            |
            <button className='cursor-pointer'>Followers</button>
        </div>
        <button className='w-full p-2 bg-green-50 cursor-pointer text-green-600 font-medium rounded my-3'>Edit Profile</button>
        <div className='flex flex-col text-gray-600 gap-4 text-sm'>
            <div className='flex items-center gap-2'>
                <MapPin className='flex w-4 h-4 ' />
                India
            </div>
            <div className='flex items-center gap-2'>
                <GraduationCap className='flex w-4 h-4 ' />
                Acropolis Institute of Technology and ...
            </div>
            <div className='flex items-center gap-2'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEq-Nq_B0sGcgwbgN0EhkPEUCBR_xN2woRg&s" alt="" className='w-4 h-4' />
                <button className='cursor-pointer'>KunalGore2005</button>
            </div>
            
            <div className='flex items-center gap-2'>
                <img src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-grise.png" alt="" className='w-4 h-4' />
                <button className='cursor-pointer'>kunalgore665</button>
            </div>
            <div className='flex items-center gap-2'>
                <Tag className='flex w-4 h-4 ' />
                <button className='h-5 rounded-full text-xs px-1 mr-1 bg-gray-200'>C++</button>
                <button className='h-5 rounded-full text-xs px-1 mr-1 bg-gray-200'>Python</button>
                <button className='h-5 rounded-full text-xs px-1 mr-1 bg-gray-200'>DSA</button>
                <button className='h-5 rounded-full text-xs px-1 mr-1 bg-gray-200'>JavaScript</button>
            </div>
        </div>
    </div>
  )
}

export default User