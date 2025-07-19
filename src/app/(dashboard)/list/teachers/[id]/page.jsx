import React from 'react'
import Image from 'next/image'
import BigCalendar from "@/components/BigCalendar"
import Link from 'next/link'
import Announcements from '@/components/Announcements'
import Performance from '@/components/Performance'
import FormModal from '@/components/FormModal'


const SingleteacherPage = () => {
  return (
    <div className='flex-1 flex flex-col gap-4 xl:flex-row'>

        {/* Left */}
        <div className='w-full xl:w-2/3'>
            {/* Top */}
            <div className='flex flex-col xl:flex-row gap-4 '>

              {/* User Info Card */}
              <div className='bg-lamaSky px-4 py-6 rounded-md flex-1 flex gap-4'>
                <div className='w-1/3'>
                  <Image
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt=''
                    width={144}
                    height={144}
                    className='w-36 h-36 rounded-full object-cover'
                  />
                </div>
                <div className='w-2/3 flex flex-col gap-4 justify-between'>
                  <div className='flex items-center gap-4'>
                    <h2 className='font-semibold text-xl '>Leonard Snyder</h2>
                    <FormModal 
                      table="teacher" 
                      type="update" 
                      data={{
                        id: 1,
                        username: "deanguerrero",
                        email: "deanguerrero@gmail.com",
                        password: "password",
                        firstName: "Dean",
                        lastName: "Guerrero",
                        phone: "+1 234 567 89",
                        address: "1234 Main St, Anytown, USA",
                        bloodType: "A+",
                        dateOfBirth: "2000-01-01",
                        sex: "male",
                        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}/>
                  </div>  
                  <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                    <div className='w-full flex items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                      <Image src="/blood.png" alt='blood' width={14} height={14}/>
                      <span>A+</span>
                    </div>
                    <div className='w-full flex items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                      <Image src="/date.png" alt='blood' width={14} height={14}/>
                      <span>January 2025</span>
                    </div>
                    <div className='w-full flex items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                      <Image src="/mail.png" alt='blood' width={14} height={14}/>
                      <span>user@gmail.com</span>
                    </div>
                    <div className='w-full flex items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3'>
                      <Image src="/phone.png" alt='blood' width={14} height={14}/>
                      <span>+1 234 567</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Small Cards */}
              <div className='flex-1 flex gap-4 justify-center flex-wrap'>
                {/* Cards */}
                <div className='w-full bg-white p-4 flex gap-4 rounded-md  md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                  <Image 
                    src="/singleAttendance.png" 
                    alt='' 
                    width={24} 
                    height={24} 
                    className='w-6 h-6'/>
                  <div>
                    <h1 className='font-semibold text-xl'>90%</h1>
                    <span className='text-sm text-gray-500'>Attendance</span>
                  </div>
                </div>
                <div className='w-full bg-white p-4 flex gap-4 rounded-md  md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                  <Image 
                    src="/singleBranch.png" 
                    alt='' 
                    width={24} 
                    height={24} 
                    className='w-6 h-6'/>
                  <div>
                    <h1 className='font-semibold text-xl'>90%</h1>
                    <span className='text-sm text-gray-500'>Branches</span>
                  </div>
                </div>
                <div className='w-full bg-white p-4 flex gap-4 rounded-md  md:w-[48%] xl:w-[45%] 2xl:w-[48%] '>
                  <Image 
                    src="/singleLesson.png" 
                    alt='' 
                    width={24} 
                    height={24} 
                    className='w-6 h-6'/>
                  <div>
                    <h1 className='font-semibold text-xl'>90%</h1>
                    <span className='text-sm text-gray-500'>Lesson</span>
                  </div>
                </div>
                <div className='w-full bg-white p-4 flex gap-4 rounded-md  md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                  <Image 
                    src="/singleClass.png" 
                    alt='' 
                    width={24} 
                    height={24} 
                    className='w-6 h-6'/>
                  <div>
                    <h1 className='font-semibold text-xl'>90%</h1>
                    <span className='text-sm text-gray-500'>Classes</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div className='mt-4 bg-white p-4 rounded-md h-[800px]'>
              <h1 className='text-xl font-semibold'>Teacher&apos;s Schedule</h1>
              <BigCalendar/>
            </div>
        </div>


        {/* Right */}
        <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        
          <div className='bg-white p-4 rounded-md' >

            <h1 className='text-xl font-semibold '>Shortcuts</h1>

            <div className='mt-4 flex flex-wrap gap-4 text-xs text-gray-500 '>
              <Link className='p-3 rounded-md bg-lamaSkyLight' href="/list/classes">Teacher&apos;s Classes </Link>
              <Link className='p-3 rounded-md bg-lamaPurpleLight' href="/list/students"> Teacher&apos;s Students </Link>
              <Link className='p-3 rounded-md bg-lamaYellowLight' href="/list/lessons"> Teacher&apos;s Lessons </Link>
              <Link className='p-3 rounded-md bg-pink-50' href="/list/exams"> Teacher&apos;s Exams  </Link>
              <Link className='p-3 rounded-md bg-lamaSkyLight' href="/list/assignments"> Teacher&apos;s Assignments </Link>
            </div>
            
          </div>
          
          <Performance/>
          <Announcements/>

        </div>
    </div>
  )
}

export default SingleteacherPage