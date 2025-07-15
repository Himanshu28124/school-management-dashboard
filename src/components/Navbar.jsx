import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>

        {/* searchBar */}
        <div className='hidden md:flex items-center  gap-2 rounded-full text-xs ring-[1.5px] ring-gray-300 px-2 '>
            <Image src="/search.png" alt='' width={14} height={14}/>
            <input type="text"  placeholder='search...' className=' w-[200px] p-2 bg-transparent outline-none'/>
        </div>

        {/* Icons & User */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='bg-white w-7 h-7 flex items-center justify-center cursor-pointer rounded-full'>
                <Image src="/message.png" height={20} width={20} alt=''/>
            </div>
            <div className='bg-white w-7 h-7 flex items-center justify-center cursor-pointer rounded-full relative'>
                <Image src="/announcement.png" alt='' width={20} height={20}/>
                <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full'>1</div>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-3 font-medium'>Jhon Doe</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>

            <div>
                <Image src="/avatar.png" alt='' width={36} height={36} className='rounded-full'/> 
            </div>
        </div>
        
    </div>
  )
}

export default Navbar