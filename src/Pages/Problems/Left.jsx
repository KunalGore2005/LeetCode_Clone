import React from 'react'
import { BookMarked, Swords, GraduationCap, Star, Lock, Globe } from 'lucide-react'

const Left = () => {
  return (
    <div className='w-65 h-screen font-sans bg-white py-3 overflow-hidden'>

      {/* Library */}
      <div className='flex items-center gap-3 px-4 py-2 mb-1 rounded-lg cursor-pointer hover:bg-gray-100 '>
        <BookMarked className='w-4.5 h-4.5' />
        <span className='text-sm font-medium'>Library</span>
      </div>

      {/* Quest */}
      <div className='flex items-center justify-between px-4 py-2 mb-1 cursor-pointer hover:bg-gray-100 rounded-lg'>
        <div className='flex items-center gap-3'>
          <Swords className='w-4.5 h-4.5' />
          <span className='text-sm'>Quest</span>
        </div>
        <span className='bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full'>New</span>
      </div>

      {/* Study Plan */}
      <div className='flex items-center gap-3 px-4 py-2 mb-4 cursor-pointer hover:bg-gray-100 rounded-lg'>
        <GraduationCap className='w-4.5 h-4.5' />
        <span className='text-sm'>Study Plan</span>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-200 mx-4' />

      {/* My Lists */}
      <div className='px-4 pt-3'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs text-gray-500'>My Lists</span>
          <div className='flex items-center gap-2 text-gray-500'>
            <span className='text-lg cursor-pointer'>+</span>
            <span className='text-xs cursor-pointer'>∨</span>
          </div>
        </div>

        {/* Favorite */}
        <div className='flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100 rounded-lg px-1'>
          <div className='flex items-center gap-3'>
            <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
            <span className='text-sm'>Favorite</span>
          </div>
          <Lock className='w-4 h-4 text-gray-400' />
        </div>

        {/* Rewind 2025 */}
        <div className='flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100 rounded-lg px-1'>
          <div className='flex items-center gap-3'>
            <div className='w-6 h-6 rounded-md bg-purple-900 flex items-center justify-center'>
              <span className='text-white text-xs font-semibold'>25%</span>
            </div>
            <span className='text-sm'>Rewind 2025</span>
          </div>
          <Globe className='w-4 h-4 text-gray-400' />
        </div>

      </div>
    </div>
  )
}

export default Left