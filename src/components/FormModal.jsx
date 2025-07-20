"use client"
import React, { useState } from 'react'
import Image from "next/image";
import dynamic from 'next/dynamic';

// import TeacherForm from "@/components/forms/TeacherForm"   //  Loaded at the time of rendering the page.
// import StudentForm from "@/components/forms/StudentForm"

//Component is loaded only when it's actually rendered.
const TeacherForm = dynamic(() => import("@/components/forms/TeacherForm"), {
    loading : () => <h1>Loading.....</h1>
})

const StudentForm = dynamic(() => import("@/components/forms/StudentForm"), {
    loading : () => <h1>Loading.....</h1>
})


const forms = {
    teacher : (type,data) => <TeacherForm type={type} data={data}/>,
    student : (type,data) => <StudentForm type={type} data={data}/>
}

const FormModal = ({table,data,type,id}) => {
    const size = type==="create" ? "w-8 h-8" : "w-7 h-7"
    const bgColor = type==="create" ? "bg-lamaYellow" : type==="update" ? "bg-lamaSky" : "bg-lamaPurple";

    const [open,setopen] = useState(false);

    const Form = () => {
        return type==="delete" && id ? (
            <form className='flex flex-col p-4 gap-4'>
                <span className='font-medium text-center'>All data will be lost. Are you sure you wnat to delete this {table}</span>
                <button className='bg-red-700 text-white py-2 px-4 rounded-md self-center w-max border-none'>Delete</button>
            </form>
        ):
         type==="create" || type==="update"?(
            forms[table]?.(type,data)|| <p className="text-red-500">Invalid table: {table}</p>
        ): 
        (
            "Form not found!"
        );
    }

  return (
    <>
        <button 
            className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
            onClick={() => (setopen(true))}
        >
            <Image src={`/${type}.png`} alt="" width={16} height={16}/>
        </button>

        {open && 
            <div className='w-screen h-screen absolute top-0 left-0 z-50 bg-black bg-opacity-60 flex items-center justify-center'>
                <div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]'>
                    <Form/>
                    <div className='absolute top-4 right-4 cursor-pointer 'onClick={() => setopen(false)}> 
                        <Image src="/close.png" alt='' width={14} height={14}/> 
                    </div>
                </div>    
            </div>
        }
    </>
  )
}

export default FormModal