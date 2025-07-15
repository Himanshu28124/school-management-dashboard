import React from 'react'
import UseCard from '@/components/UseCard'
import CountChart from '@/components/CountChart'
import AttendanceChart from '@/components/AttendanceChart'
import FinanceChart from '@/components/FinanceChart'
import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'

function AdminPage() {
  return (

    <div className='flex flex-col md:flex-row gap-4 p-4'>
    
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8 '>
        {/* UseCard */}
        <div className='flex justify-between gap-4 flex-wrap'>
          <UseCard type={"Students"}/>
           <UseCard type={"Teacher"}/>
            <UseCard type={"Parents"}/>
             <UseCard type={"Staff"}/>
        </div> 
        {/* Middle Chart */}
        <div className='flex flex-col lg:flex-row gap-4 '>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart/>
          </div>
          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3 h-[450px]'> 
            <AttendanceChart/>
          </div>
        </div>
        {/* Bottom Chart */}
        <div className='w-full h-[500px]'>
          <FinanceChart/>
        </div>
      </div>

      {/* Right */}
      <div className='w-full lg:w-1/3'>
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage