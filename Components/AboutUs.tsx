"use client"

import React from 'react'

export default function AboutUsCompoonent() {
  return (
    <section className='flex flex-col items-center w-full h-full lg:p-24 p-2'>
        <div className='lg:w-1/2 w-full flex flex-col justify-center items-center mb-10 shadow-md shadow-heading p-2'>
            <h2 className='lg:text-6xl text-4xl font-bold text-heading mb-5'>Company Overview</h2>
            <p className='max-w-prose text-xl text-white'><span className='lg:text-3xl text-2xl font-bold text-heading mr-1'>Okuhle Msimza</span>is a specialized engineering company dedicated to the commissioning, installation, and testing of Medium Voltage (MV) and Low Voltage (LV) switchgear systems. With a team of highly skilled and certified professionals, we ensure that your electrical systems are reliable, efficient, and compliant with industry standards.</p>
        </div>
        <div className='lg:w-1/2 w-full flex flex-col justify-center items-center mb-10 p-2'>
            <h2 className='lg:text-6xl text-4xl font-bold text-heading mb-5'>Mission Statement</h2>
            <p className='max-w-prose text-xl text-white'>Our mission is to provide top-notch electrical engineering services that guarantee the safety, reliability, and performance of your electrical infrastructure. We strive to exceed our clients' expectations through innovation, quality workmanship, and unparalleled customer service.</p>
        </div>
       
        <div className='lg:w-1/2 w-full flex flex-col justify-center items-center mb-10 rounded-lg  shadow-md shadow-heading p-2'>
            <h2 className='lg:text-6xl text-4xl font-bold text-heading mb-5'>Company Vlaues</h2>
            <p className='max-w-prose text-2xl text-white mb-5'> At <span className='lg:text-xl text-2xl font-bold text-heading mr-1'>Okuhle Msimza</span>, we uphold the following core values in everything we do:</p>
             <ul className='text-white flex flex-col gap-5'>
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
         <div className='w-full flex flex-col justify-center items-center mb-10 p-2'>
            <h2 className='lg:text-6xl text-4xl font-bold text-heading mb-5'>Company Vision</h2>
            <p className='max-w-prose text-xl text-white'>Our vision at Okuhle Msimza Electrical Engineering is to be a leading provider of reliable and innovative electrical solutions. We aim to continually exceed client expectations through our expertise, dedication to quality, and commitment to sustainable practices.</p>
        </div>

    </section>
  )
}
