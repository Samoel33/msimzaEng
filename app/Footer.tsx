"use client"
import React from 'react'

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='w-full h-auto grid lg:grid-cols-2 grid-cols-1 justify-center   border-t-2 border-gray-400  mt-auto'>
      
      <div className="h-auto w-full p-2  bg-black border-t-4 border-text-primary flex flex-col justify-around lg:flex-row md:flex-col col-span-1 lg:col-span-3">
        <span className="text-sm md:text-md lg:text-md font-medium text-white p-2">All right Reserved &copy; <span className="text-md lg:text-xl md:text-md text-heading">
          Okuhle Msimza {year}</span></span>
          <span className="p-2 text-md text-white text-bold font-bold">Created with ❤️ by HSTT Technologies</span>
      </div>
      </footer>
  )
}

