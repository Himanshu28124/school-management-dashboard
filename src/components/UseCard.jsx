import React from 'react'
import Image from 'next/image'

const UseCard = ({type}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
        <div className='flex items-center justify-between'>
            <span className='bg-white text-[10px] text-green-600 px-2 py-1 rounded-full'>2024/25</span>
            <Image src="/more.png" alt='' width={20} height={20}/>
        </div>
        <h1 className='text-2xl font-semibold my-4'>1,1234</h1>
        <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  )
}

export default UseCard