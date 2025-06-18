"use client"

import React from 'react'
import { Building, Target, Eye, Lightbulb, Handshake, TrendingUp } from 'lucide-react';
export default function AboutUsCompoonent() {
  return (
    <section className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:px-20 px-5 py-10 justify-center items-center  '>
        <div className=' w-full h-full flex flex-col justify-center items-center mb-10 shadow-md p-2 bg-white rounded-md'>
            <h2 className='lg:text-4xl text-2xl font-bold text-heading mb-5 flex justify-center items-center'><Building className='text-heading mr-2' size={30} /> Company Overview</h2>
            <p className='max-w-prose text-gray-600 text-base mb-4 '><span className='lg:text-2xl text-xl font-bold text-heading mr-1'>Okuhle Msimza</span>is a specialized engineering company dedicated to the commissioning, installation, and testing of Medium Voltage (MV) and Low Voltage (LV) switchgear systems. With a team of highly skilled and certified professionals, we ensure that your electrical systems are reliable, efficient, and compliant with industry standards.</p>
        </div>
        <div className=' w-full h-full flex flex-col justify-center items-center mb-10 p-2 bg-white rounded-md'>
            <h2 className='lg:text-4xl text-2xl font-bold text-heading mb-5 flex justify-center items-center'><Target className='text-heading  mr-2' size={30}/> Mission Statement</h2>
            <p className='max-w-prose text-gray-600 text-base mb-4'>Our mission is to provide top-notch electrical engineering services that guarantee the safety, reliability, and performance of your electrical infrastructure. We strive to exceed our clients' expectations through innovation, quality workmanship, and unparalleled customer service.</p>
        </div>
       
        <div className='w-full h-full flex flex-col justify-center items-center mb-10 rounded-lg  shadow-md bg-white p-2'>
            <h2 className='lg:text-4xl text-2xl font-bold text-heading mb-5 flex justify-center items-center'><Handshake className='text-heading mr-2' size={30} /> Company Values</h2>
            <p className='max-w-prose text-gray-600 text-base mb-4'> At <span className='lg:text-xl text-2xl font-bold text-heading mr-1'>Okuhle Msimza</span>, we uphold the following core values in everything we do:</p>
             <ul className='text-gray-600 text-base mb-4 flex flex-col gap-1 p-2'>
        <li>
        <strong>Excellence:</strong> Striving for the highest standards of quality and performance in our services.
        </li>
      <li>
        <strong>Integrity:</strong> Conducting business with honesty, transparency, and accountability.
      </li>
      <li>
        <strong>Innovation:</strong> Embracing technological advancements and creative solutions to enhance efficiency.
      </li>
      <li>
        <strong>Safety:</strong> Prioritizing the well-being of our employees, clients, and the community.
      </li>
      <li>
        <strong>Customer Focus:</strong> Committing to understanding and meeting the unique needs of each client.
      </li>
    </ul>
        </div>
         <div className='w-full h-full flex flex-col justify-center items-center mb-10 p-2 bg-white rounded-sm shadow-md'>
            <h2 className='lg:text-4xl text-2xl font-bold text-heading mb-5 flex justify-center items-center'><Lightbulb className='text-yellow-500' size={30} mr-2/> Company Vision</h2>
            <p className='max-w-prose text-gray-600 text-base mb-4'>Our vision at Okuhle Msimza Electrical Engineering is to be a leading provider of reliable and innovative electrical solutions. We aim to continually exceed client expectations through our expertise, dedication to quality, and commitment to sustainable practices.</p>
        </div>

    </section>
  )
}
