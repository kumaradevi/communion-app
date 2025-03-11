"use client"
import EventCard from '../components/molecules/EventCard';
import React, { useState } from 'react'
import data from '../models/data'
import { BsPlusCircle } from "react-icons/bs";
import Popup from '../components/molecules/Popup';
import { IoSearch } from "react-icons/io5";
import NewEvent from '../components/molecules/NewEvent';
const page = () => {
    const [popup,setPopup]=useState(false);
    const [query,setQuery]=useState("");
    const [filterCategory,setFilterCategory]=useState("")
    const [events,setEvents]=useState([])

    const handleChange=(e)=>{
     setFilterCategory(e.target.value);
    }
    const allEvents = [...data, ...events];

const filteredData = allEvents.filter((item) => {
  return (
    (!query || item.title.toLowerCase().includes(query.toLowerCase())) &&
    (!filterCategory || item.category.toLowerCase() === filterCategory)
  );
});
  
  return (
    <div className='bg-[#FFFFFF] mt-12 w-[100vw] h-[100%]'>
        {/* search  */}
        <div className='w-[80%] mx-auto flex justify-between'>
        <div className='w-[400px] mb-12 border border-gray-700 px-5 py-2 rounded-md flex justify-between items-center'>
                <input type="text" placeholder='search events here...' className='w-full outline-none border-none ring-0' onChange={(e)=>setQuery(e.target.value)}/>
                <div><IoSearch  size={25}/></div>
            </div>
            <div>
                <select name="category" id="" onChange={handleChange}>
                    <option value="">choose category</option>
                    <option value="religious">Religious</option>
                    <option value="social">Social</option>
                    <option value="charity">Charity</option>
                </select>
            </div>
            </div>
        <div className='w-[80%] mx-auto flex flex-wrap gap-8'>
            
            {data&& filteredData.map((item)=>(
                <EventCard key={item.id} item={item}/>
            ))}
          
          {popup && <Popup setPopup={setPopup} events={events} setEvents={setEvents}/>}
           
        </div>
        <div className='fixed bottom-2 right-6 cursor-pointer ' onClick={()=>setPopup(true)}>
          <BsPlusCircle size={50} className='text-blue-500'/>
          </div>
       {/* <div className='flex flex-wrap w-[80%] mx-auto gap-8'>
       {events&& filteredData.map((item,index)=>(
            <NewEvent item={item} key={index}/>
           )) }
       </div> */}
    </div>
  )
}

export default page