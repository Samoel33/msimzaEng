"use client"
import { motion } from 'framer-motion'
import React,{useRef} from 'react'


export default function ServicesComponent() {
  const commissioninglist=[
    {id:1,service:"Comprehensive pre-commissioning and commissioning services."},
    {id:2,service:"Functional and performance testing."},
    {id:3,service:"Verification of protection and control schemes."},
    {id:4,service:"Coordination with project stakeholders to ensure seamless integration."},
  
  ]
  const testinglist=[
    {id:5,service:" Insulation resistance testing."},
    {id:6,service:"Circuit breaker testing and calibration."},
    {id:7,service:" Protective relay testing and calibration."},
    {id:8,service:"Thermographic surveys and analysis."},
    {id:9,service:"Electrical testing and diagnostics."},
  
  ]

  const Installationlist=[
    {id:10,service:" Professional installation of switchgear equipment."},
    {id:11,service:"Adherence to manufacturer guidelines and industry standards."},
    {id:12,service:" Coordination with other trades to ensure smooth project execution."},
    {id:13,service:"Site safety management and compliance."},
  
  ]

  const varient={
    init:(index:number)=>({
      opacity:0,
      x:index,
      transition:{
        opacity:0,
        x:20,
        type:"spring",
        duration:0.8
      }}),
      inView:(delay:number)=>({
        opacity:1,
        x:0,
        transition:{
          type:"spring",
          duration:0.8,
        }
    })
  }

  return (
    <><h2 className='lg:text-6xl text-4xl font-bold text-heading m-5 text-center lg:col-span-2'>Company Services</h2>
    <section className='grid lg:grid-cols-4 grid-cols-1 place-items-center w-full h-full lg:p-24 p-2 lg:gap-1 gap-4 '>
    <motion.div variants={varient} initial="init" whileInView="inView" viewport={{once:true}} custom={-30} className='flex  flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5'>
            <h2 className='lg:text-2xl text-xl font-bold text-heading mb-5'>Commissioning of MV and LV Switchgear</h2>
            <ul className='w-full '>
            {
                commissioninglist.map(({id,service})=>(
                  <li className='text-gray-600 text-base mb-4' key={id}>{service}</li>
                ))
              }
              </ul>
        </motion.div>
    <motion.div variants={varient} initial="init" whileInView="inView" viewport={{once:true}} custom={30}  className='flex  flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5'>
            <h2 className='lg:text-2xl text-xl font-bold text-heading mb-5'>Testing of MV and LV Switchgear</h2>
          
            <ul className='w-full '>
            {
                testinglist.map(({id,service})=>(
                  <li className='text-gray-600 text-base mb-4' key={id}>{service}</li>
                ))
              }
              </ul>
        </motion.div>
        <div className='col-start-2 col-end-4 row-start-1 row-end-3 flex items-center justify-center w-[80%] h-[90%] rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 md:hidden sm:hidden lg:block'>
          <img src="/switch-disconnector-manual-switching.jpg" alt="services" className='w-full h-full object-cover rounded-2xl shadow-lg' />
        </div>
        <motion.div variants={varient} initial="init" whileInView="inView" viewport={{once:true}} custom={-30}  className="flex  flex-col gap-2 w-full rounded-2xl overflow-hidden shadow-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5">
            <h2 className='text-heading text-xl font-semibold mb-4'>Installation of MV and LV Switchgear</h2>
          
            <ul className='w-full  '>
            {
                Installationlist.map(({id,service})=>(
                  <li className='text-gray-600 text-base mb-4' key={id}>{service}</li>
                ))
              }
              </ul>
        </motion.div>
        </section>
        </>
  )
}
