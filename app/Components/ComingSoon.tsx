import React from 'react'
import Image from "next/image"
export default function ComingSoon() {
  return (
    <div className="w-full h-full p-24 grid grid-cols-1 justify-center items-center bg-white">
         <div className='lg:w-1/2 w-full h-full shadow-sm'>
        <Image src='/logo.jpg' className="object-cover w-full" width={800} height={600} alt="logo"/>
        </div>
        <div className="text-[24px] font-bold text-gray-500">ComingSoon</div></div>
  )
}
