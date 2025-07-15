import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Announcement</h1>
            <span className='text-xs text-gray-400'>View All</span>
        </div>

        <div className='flex flex-col mt-4 gap-4'>
            <div className='bg-lamaSkyLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-medium '>Lorem ipsum dolor sit. </h1>
                    <span className='bg-white text-gray-400 rounded-md p-1'>2025-01-01</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio,</p>
            </div>

            <div className='bg-lamaPurpleLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-medium '>Lorem ipsum dolor sit. </h1>
                    <span className='bg-white text-gray-400 rounded-md p-1'>2025-01-01</span>
                </div>
                  <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio,</p>
            </div>

            <div className='bg-lamaYellowLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-medium '>Lorem ipsum dolor sit. </h1>
                    <span className='bg-white text-gray-400 rounded-md p-1'>2025-01-01</span>
                </div>
                 <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio,</p>
            </div>
            
        </div>
    </div>
  )
}

export default Announcements