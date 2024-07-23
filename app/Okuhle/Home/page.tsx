'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {motion, spring} from "framer-motion"
export default function HomeComponent() {
  return (
    <main className="flex-col lg:flex-row  lg:flex items-center justify-center lg:p-24 p-0 ">
     <div className='flex flex-col  justify-center gap-3 lg:w-1/2 w-full mb-2'>
      <motion.h1 initial={{opacity:0, y:-40}} animate={{opacity:1,y:0, transition:{duration:0.8, type:spring}}} className='lg:text-6xl text-4xl font-bold text-heading lg:mb-5 mb-2 '>Services You Can Trust, All the time.</motion.h1>
      <p className='max-w-prose lg:text-2xl text-xl text-gray-300 lg:mb-5 mb-2'><span className='lg:text-3xl text-2xl font-bold text-heading mr-1'>Okuhle Msimza</span>is a specialized engineering firm dedicated to the commissioning, installation, and testing of Medium Voltage (MV) and Low Voltage (LV) switchgear systems</p>
      <Link href={`/Okuhle/AboutUs`} className='bg-heading h-10 w-32 flex justify-center items-center text-white text-xl font-bold rounded-md'>About Us</Link>
     </div>
    <div className='h-96 lg:w-1/2 w-full relative flex  lg:justify-center lg:items-center justify-start'>
    <div className='bg-heading rounded-full h-10 w-10 absolute top-0 left-20 z-10 lg:visible invisible'></div>
    <div className='bg-heading rounded-full h-10 w-10 absolute top-96 left-80 lg:visibleinvisible'></div>
    <div className='bg-heading rounded-full h-10 w-10 absolute top-0 right-80 z-10 lg:visible invisible'></div>
      <div className='h-full lg:w-60 w-32 bg-black absolute lg:top-14 lg:left-20 top-14 left-8 rounded-xl'>
        <Image src="/switches.jpg" alt='Sub' width={500} height={1200} className='w-full h-full object-cover rounded-xl '/>
      </div>
      <div className='h-96 lg:w-60 w-32 bg-red-400 absolute lg:top-5 lg:left-56 top-5 left-40 rounded-xl opacity-80'>
         <Image src="/switchboards.jpg" alt='Sub' width={500} height={1200} className='w-full h-full object-cover rounded-xl opacity-80 '/>
      </div>
      <div className='h-96 lg:w-60 w-32 bg-black absolute lg:top-10 lg:left-96 top-10 right-4 rounded-xl opacity-80'>
         <Image src="/substation.jpg" alt='Sub' width={500} height={1200} className='w-full h-full object-cover rounded-xl opacity-90 '/>
      </div>
    </div>
    </main>
  )
}