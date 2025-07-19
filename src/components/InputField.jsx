import React from 'react'

const InputField = ({label,name,type="text",error,register}) => {
  return (
    <div className='flex flex-col gap-2 w-full md:w-1/4'>
        <label className='text-xs text-gray-500'>{label}</label>
        <input 
            type={type}
            {... register(name)}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md  text-sm w-full'
        />
        {error?.message && <p className='text-red-500 text-xs'>{error.message}</p>}
    
    </div>
    
  )
}

export default InputField