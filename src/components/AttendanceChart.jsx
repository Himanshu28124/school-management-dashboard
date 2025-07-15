"use client"
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
    
  },
  {
    name: 'Tue',
    present: 90,
    absent: 13,
   
  },
  {
    name: 'Wed',
    present: 80,
    absent: 45,
   
  },
  {
    name: 'Thu',
    present: 50,
    absent: 50,
 
  },
  {
    name: 'fri',
    present: 18,
    absent: 48,
   
  },
 
];

function AttendanceChart() {
  return (
    <div className=' h-full bg-white rounded-lg p-4'>  
         <div className='flex  items-center justify-between '>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" width={20} height={20} alt=''/>
        </div>
        
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke= "#ddd"/>
          <XAxis
            dataKey="name" 
            axisLine={false}
            tick={{fill:"#d1d5db"}}
            tickLine={false}
          />
          <YAxis 
            axisLine={false}
            tick={{fill:"#d1d5db"}}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend 
            align='left'
            verticalAlign='top'
            wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}
          />
           <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart