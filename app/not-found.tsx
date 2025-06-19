import React from 'react'
import Image from 'next/image'
import logo from '../public/mshimza.svg'
export default function PageNotFound() {
  return (
    <div className='container flex flex-col'>
      <div className='w-1/4 h-auto flex justify-center items-center'>
        <Image src={logo} className='object-cover w-1/2 h-full' alt="Okuhle Msimza"/>
      </div>
      <p className='font-bold text-4xl text-center'>Page Not Found</p>
    </div>
  )
}
