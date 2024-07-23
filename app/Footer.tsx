"use client"
import React from 'react'

export default function Footer() {


  const chooseUs=[
    {id:1,reason:" Our team consists of experienced engineers and technicians with a deep understanding of MV and LV switchgear systems.",title:"Expertise: "},
    {id:2,reason:" We adhere to stringent quality control processes to ensure the highest standards of workmanship.",title:"Quality Assurance:"},
    {id:3,reason:" Safety is our top priority. We follow best practices and comply with all relevant safety regulations.",title:" Safety:"},
    {id:4,reason:"   We work closely with our clients to understand their specific needs and deliver tailored solutions.",title:"Customer Focus:"},
    {id:5,reason:"  We use state-of-the-art equipment and methodologies to ensure your systems are reliable and efficient.",title:"Reliability:"},
  ]
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='w-full h-auto grid lg:grid-cols-2 grid-cols-1 justify-center   border-t-2 border-gray-400  mt-auto'>
      <div className="h-auto w-full p-5 flex flex-col justify-center items-center lg:col-span-2">
        <h2 className='font-bold text-4xl text-heading mb-5'>Why Choose Us</h2>
          <ul className=' flex flex-col justify-center'>
            {
                chooseUs.map(({id,reason,title})=>(
                  <li className='text-[16px] font-bold p-2 hover:scale-110  text-white' key={id}><span className='text-bold text-heading text-xl'>{title}</span>{reason}</li>
                ))
              }
              </ul>
      </div>
      <div className="h-auto w-full p-2  bg-secondary border-t-4 border-text-primary flex flex-col justify-around lg:flex-row md:flex-col col-span-1 lg:col-span-3">
        <span className="text-sm md:text-md lg:text-md font-medium text-white p-2">All right Reserved &copy; <span className="text-md lg:text-xl md:text-md text-heading">
          Okuhle Msimza {year}</span></span>
          <span className="p-2 text-md text-blue-700 text-bold font-bold">Created with ❤️ by HSTT Technologies</span>
      </div>
      </footer>
  )
}
