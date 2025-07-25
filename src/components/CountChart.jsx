"use client"

import { RadialBarChart, RadialBar,  ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4 '>

        {/* Title */}
        <div className='flex  items-center justify-between '>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" width={20} height={20} alt=''/>
        </div>

        {/* Chart */}
        <div className='w-full h-[75%] relative'>
            
            <ResponsiveContainer >
              <RadialBarChart   
                    cx="50%" 
                    cy="50%" 
                    innerRadius="40%" 
                    outerRadius="100%" 
                    barSize={32} 
                    data={data}
                >
                <RadialBar background dataKey="count"/>
              </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>

        {/* Bottom */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaSky rounded-full'></div>
                <h1 className='font-bold '>1,1234</h1>
                <h2 className='text-xs text-gray-300'>Boy(55%)</h2>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaYellow rounded-full'></div>
                <h1 className='font-bold '>1,1234</h1>
                <h2 className='text-xs text-gray-300'>Girl(45%)</h2>
            </div>
        </div>

    </div>
  )

}
export default CountChart
