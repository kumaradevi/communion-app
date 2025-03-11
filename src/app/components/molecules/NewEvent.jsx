import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

const NewEvent = ({item}) => {
  return (
    <div className='bg-white shadow-md w-[300px] h-[200px] p-5 mt-12 flex flex-col gap-4'>
      
       <h2 className='font-medium text-2xl'>{item.title}</h2>
       <div className='flex gap-2 items-center mt-4'>
        <div><FaCalendarAlt /></div>
        <p>{item.date}</p>
       </div>
       <div>
        
        <p>Category:{item.category}</p>
       </div>
       
      
       
    </div>
  )
}

export default NewEvent