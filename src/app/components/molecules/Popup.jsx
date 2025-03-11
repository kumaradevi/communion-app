
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";


const Popup = ({setPopup,events,setEvents}) => {
    const [formData,setFormData]=useState({
        title:"",
        img:null,
        date:"",
        location:"",
        category:""
    });
   
  
    const handleChange=(e)=>{
   const{name,value}=e.target;
   setFormData(prev=>({...prev,[name]:value}));
    }
    const handleFileChange=(e)=>{
      const file=e.target.files[0];
      setFormData(prev=>({...prev,img:file}));
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       setEvents(prev=>[...prev,formData]);
       setFormData({title:"",img:null,date:"",location:"",category:""});
       console.log(events)
    }
  return (
    <div className='bg-gray-200 absolute top-0 left-0 w-full h-full flex justify-center items-center z-[9999999]'>
   <div className='bg-white w-[600px] h-[480px] p-8   rounded-3xl relative'>
     <h2>Add Event</h2>
     <div className='absolute right-6 top-6' onClick={()=>setPopup(false)}><IoMdClose size={30}/></div>
     <form action="" onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
        <label htmlFor="">Title</label>
        <input type="text" name="title" className='border border-gray-300 rounded-md px-3 py-2' value={formData.title} onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="">Picture</label>
        <input type="file" name="img" className='border border-gray-300 rounded-md px-3 py-2'  onChange={handleFileChange}/>
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="">Date</label>
        <input type="date" name="date" className='border border-gray-300 rounded-md px-3 py-2' value={formData.date} onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="">Location</label>
        <input type="text" name="location" className='border border-gray-300 rounded-md px-3 py-2' value={formData.location} onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor="">Category</label>
        <select name="category" id="" className='border border-gray-300 rounded-md px-3 py-2' value={formData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="religious">Religious</option>
            <option value="social">Social</option>
            <option value="charity">Charity</option>
        </select>
       
        </div>
        <button className='bg-blue-600 text-white px-5 py-2 mt-6'>Add Event</button>
     </form>
   </div>
    </div>
  )
}

export default Popup