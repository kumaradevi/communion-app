"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const EventCard = ({item}) => {
  const [flipped,setFlipped]=useState(false);
  return (
    <div className="relative w-[280px] max-h-[360px] perspective-1000"
    onClick={() => setFlipped(!flipped)}>
    <div className={`bg-white w-[280px] h-[360px] rounded-md shadow-md ${flipped ? "rotate-y-0 " : ""}`}>
     {!flipped ? <div className="absolute w-full h-full bg-white rounded-md shadow-md backface-hidden">
     <div className='w-[280px] '>
        <Image src={item.img} width={100} height={100} alt='event' className='w-[100%] h-[200px] object-cover rounded-md'/>
      </div>
     <div className='p-3 flex flex-col gap-3'>
     <h2 className='font-medium text-xl'>{item.title}</h2>
      <div className='flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <div><FaCalendarAlt /></div>
      <p>{item.date}</p>
      </div>
      <div className='flex gap-2 items-center'>
        <div><FaLocationDot /></div>
        <p>{item.location}</p>
      </div>
      
      </div>
     </div> 
      <button className='bg-gray-800 text-white py-2 w-full bottom-0 cursor-pointer' >Event Details</button>
     </div> :<div className='flex flex-col gap-2 p-6'>
       <h2 className='text-2xl font-medium'>{item.title}</h2>
        <p>{item.description}</p>
      
      </div>}
    </div>
    </div>
  )
}

export default EventCard