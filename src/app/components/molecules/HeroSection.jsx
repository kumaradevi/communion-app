"use client";
import Lottie from 'lottie-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import welcomeAnimation from "../../models/welcomeAnimation"

const HeroSection = () => {
  const router=useRouter();
  return (
    <div className='flex flex-col md:flex-row gap-20 mt-12 '>
        <div className='w-full md:w-[40%] flex flex-col gap-5'>
           
            <div>
              <Lottie animationData={welcomeAnimation} loop={true}/>
            </div>
            <p> <span className='font-medium text-2xl text-purple-600'> Your Digital Companion for Faith & Fellowship! 🙏✨</span> 

Join a community of believers, stay connected with your church, and strengthen your faith journey. Explore daily devotions, upcoming events, and meaningful conversations with fellow members.

Let’s grow in faith together! 🌿💖</p>
<button className='bg-purple-800 text-white px-6 py-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-95' onClick={()=>router.push('/event')}>Explore Events</button>
        </div>
        <div className='w-full md:w-[60%] flex gap-6 '>
            <div>
                
        <Image src={'/assets/communion.jpg'} width={100} height={100} alt='communion-hero-image' className='mx-auto w-[300px] h-[200px] object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-110'/>
<Image src={'/assets/communion1.avif'} width={150} height={150} alt='communion-hero-image' className='mx-auto w-[300px] h-[200px] object-cover rounded-full mt-12 transition-transform duration-300 ease-in-out hover:scale-110'/>
            </div>
<div>
<Image src={'/assets/communion3.jpg'} width={100} height={100} alt='communion-hero-image' className='mx-auto w-[300px] h-[200px] object-cover rounded-full mt-12 transition-transform duration-300 ease-in-out hover:scale-110 '/>
<Image src={'/assets/communion2.jpg'} width={150} height={150} alt='communion-hero-image' className='mx-auto w-[300px] h-[200px] object-cover rounded-full mt-12 transition-transform duration-300 ease-in-out hover:scale-110'/>

</div>
        </div>

    </div>
  )
}

export default HeroSection