'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {motion, spring} from "framer-motion"
import { MdEmail,MdHealthAndSafety  } from 'react-icons/md'
import { BiDownArrow } from 'react-icons/bi'
import { FaHandshake ,FaUserCheck,FaHandSparkles} from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";

export default function HomeComponent() {
  return (
    <main className='relative'>
    <div
  className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex lg:items-center lg:pt-0 pt-12 items-start justify-center"
  style={{ backgroundImage: "url('/lightd.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm shadow-2xl z-0" />
  <div className="relative z-10 flex flex-col justify-center gap-3 lg:w-1/2 w-full p-4">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } }}
      className="lg:text-6xl text-4xl font-bold text-white lg:mb-5 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
    >
      Services You Can Trust,
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } }}
      className="lg:text-6xl text-4xl font-bold text-white lg:mb-5 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
    >
      All the Time.
    </motion.h2>
    <motion.p className="max-w-prose lg:text-2xl text-xl text-white lg:mb-5 mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
    initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay:0.5, type: 'spring' } }}>
      <span className="lg:text-3xl text-2xl font-bold text-heading mr-1">Okuhle Msimza</span>
      is a specialized engineering firm dedicated to the commissioning, installation, and testing of Medium Voltage (MV) and Low Voltage (LV) switchgear systems.
    </motion.p>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8,delay:0.5, type: 'spring' } }} className='flex gap-3 w-full lg:justify-start justify-center flex-col lg:flex-row'>
    <Link
      href={`/Okuhle/AboutUs`}
      className="bg-[#7b3f44] hover:bg-[#622e33] transition-all duration-300 h-10 w-64 flex justify-center items-center text-white text-xl font-bold rounded-md shadow-lg"
    >
      About Us
    </Link>
    <Link
      href={`/Okuhle/AboutUs`}
      className="bg-white border border-paragraph hover:bg-[#c59da1] transition-all duration-300 h-10 w-64 p-2 flex justify-center items-center text-paragraph text-xl font-bold rounded-md shadow-lg"
    >
      <MdEmail className='text-paragraph size-8 ml-2'/> Email Us your query
    </Link>
    </motion.div>
  </div>
   <div className="absolute bottom-[-1px] right-0 lg:w-3/4 w-11/12 h-[10vh] bg-border opacity-1 text-center p-4 z-10 shadow-md rounded-t-lg"><h2 className='font-bold lg:text-4xl text-2xl text-heading mt-5 flex flex-row'><BiDownArrow className='size-10 text-white mr-2 '/>Why Choose Us</h2></div>
  </div>
  <div className=" lg:mx-32 mx-0 flex flex-col justify-center items-center ">
          <ul className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-full lg:p-12 p-2'>
            
                  <div className="flex lg:flex-row flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className='lg:w-1/2 w-full h-full shadow-sm'>
                  <Image src='/expertise.jpg' width={800} height={600} className='object-cover w-full h-auto' alt='Expertise'/>
                  </div>
                  <div className="p-5 lg:w-1/2 w-full h-full flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-bold text-paragraph mb-2 flex gap-2">Expertise <GrUserExpert className='size-10 text-[#c59da1]'/> </h2>
                  <p className="text-gray-600 text-base mb-4">
                  Our team consists of experienced engineers and technicians with a deep understanding of MV and LV switchgear systems.
                  </p>
                </div>
                </div>
                  <div className="flex lg:flex-row flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-5 lg:w-1/2 w-full h-full flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-bold text-paragraph mb-2 flex gap-2">Quality Assurance <FaUserCheck className='size-10 text-[#c59da1]'/></h2>
                  <p className="text-gray-600 text-base mb-4">
                  We adhere to stringent quality control processes to ensure the highest standards of workmanship.
                  </p>
                </div>
                  <div className='lg:w-1/2 w-full h-full shadow-sm'>
                  <div className='w-full h-full relative'>
                  <Image src='/qualityA.jpg' width={800} height={700} className='object-cover rounded' alt='Quality Assurance'/>
                  </div>
                  </div>
                </div>
                  <div className="flex lg:flex-row flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className='lg:w-1/2 w-full h-full shadow-sm'>
                  <Image src='/safety.jpg' width={800} height={600} className='object-cover w-full h-auto' alt='Expertise'/>
                  </div>
                  <div className="p-5 lg:w-1/2 w-full h-full flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-bold text-paragraph mb-2 flex gap-2"> Safety <MdHealthAndSafety className='size-10 text-[#c59da1]'/></h2>
                  <p className="text-gray-600 text-base mb-4">
                  Safety is our top priority. We follow best practices and comply with all relevant safety regulations.
                  </p>
                </div>
                </div>
                  <div className="flex lg:flex-row flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-5 lg:w-1/2 w-full h-full flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-bold text-paragraph mb-2 flex gap-2">Customer Focus <FaHandshake className='size-10 text-[#c59da1]'/></h2>
                  <p className="text-gray-600 text-base mb-4">
                  We work closely with our clients to understand their specific needs and deliver tailored solutions.
                  </p>
                </div>
                  <div className='lg:w-1/2 w-full h-full shadow-sm'>
                  <div className='w-full h-full relative'>
                  <Image src='/customerFocus.jpg' width={800} height={700} className='object-cover rounded' alt='Quality Assurance'/>
                  </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className='lg:w-1/2 w-full h-full shadow-sm'>
                  <Image src='/Reliability.jpg' width={800} height={600} className='object-cover w-full h-auto' alt='Expertise'/>
                  </div>
                  <div className="p-5 lg:w-1/2 w-full h-full flex flex-col justify-center items-start">
                  <h2 className="text-2xl font-bold text-paragraph mb-2 flex gap-2"> Reliability <FaHandSparkles className='size-10 text-[#c59da1]'/></h2>
                  <p className="text-gray-600 text-base mb-4">
                  We use state-of-the-art equipment and methodologies to ensure your systems are reliable and efficient.
                  </p>
                </div>
                </div>
              </ul>
      </div>
      </main>
  )
}
