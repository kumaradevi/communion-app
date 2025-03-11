import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-white text-purple-500 font-semibold sticky top-0 z-[999]'>
        <div className='flex justify-between items-center h-full w-[80%] mx-auto'>
        {/*  */}
        <div className='flex gap-2 items-center'>
          <Image src={'/assets/communionLogo.webp'} width={40} height={40} alt='logo'/>
          <h3 className='text-3xl'>Communion</h3>
        </div>
        {/*  */}
        <ul className='hidden md:flex gap-20'>
            <Link href={'/'} >Home</Link>
            <Link href={'/event'}>Event</Link>
            <Link href={'/about'}>About</Link>
        </ul>
        <div>
            <p>Sign In</p>
        </div>
        </div>
    </div>
  )
}

export default Navbar