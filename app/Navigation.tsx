"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { GiBatteryPack } from "react-icons/gi";
import {
  FaAlignRight,
  FaTimes,
  FaHome,
} from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import {motion} from "framer-motion";
import { usePathname } from 'next/navigation';




export default function Navigation() {
    const [burgered,setBurger] = useState<boolean>(false);

    const closeBurger = () =>{
      (!burgered)?setBurger(true):setBurger(false);
    }
  const navigationList = [
    {id:1,value:"Home",icon:<FaHome className='text-white '/>},
    {id:2,value:"Services",icon:<MdOutlineHomeRepairService className='text-white'/>},
    {id:3,value:"Projects"},
    {id:4,value:"Gallery",icon:<GrGallery className='text-white'/>},
    {id:5,value:"AboutUs"},
    {id:6,value:"ContactUs"}
  ]

  const variants = {
  open: { opacity: 1, x: 1 },
  closed: { opacity: 0, x: "-100%" },
}
const variantsList = {
  initial:{
    opacity:0,
    y:100
  },
  open:(index:number)=> ({
   opacity:1,
   y:0,
   transition:{
    delay:0.05 * index
   }
  })
  
};
const pathName = usePathname();
const isActive=(path:string)=>{
  return pathName === path
}
  return (
    <>
    <nav className='flex justify-between items-center h-32 bg-gray-950 sticky top-0 right-0 z-20 w-full'>
      <div className='h-full w-60 flex items-center lg:justify-center justify-start'>
        <Link href="/" className='text-2xl font-bold text-heading2 flex items-center lg:p-2 p-1 border-b-2 border-white'>
          <GiBatteryPack className='text-white mr-2' /> OKUHLE
        </Link>
      </div>
  
      <ul className='hidden lg:flex lg:w-1/2 justify-between items-center'>
        {navigationList.map(({ id, value,icon }) => (
          <li key={id} className='h-20 p-5 flex justify-center items-center'>
            <Link href={value} className='text-white flex justify-center items-center gap-1 h-full'>{icon}{value}</Link>
          </li>
        ))}
      </ul>
  
      <button type="button" className="w-20 lg:hidden" onClick={closeBurger}>
        {burgered ? (
          <FaTimes className="text-4xl text-heading2" />
        ) : (
          <FaAlignRight className="text-4xl text-white" />
        )}
      </button>
   
  
    {burgered && (
      <motion.ul
        animate="open"
        variants={variants}
        className='absolute top-32 right-0 flex-col justify-between items-center lg:hidden z-30 bg-[#c59da1] w-full h-[90vh]'
      >
        {navigationList.map(({ id, value,icon }) => (
          <motion.li
            key={id}
            variants={variantsList}
            initial="initial"
            whileInView="open"
            viewport={{ once: true }}
            className='h-20 p-5 flex justify-center items-center text-white'
          >
            <Link href={value} className='text-xl font-bold text-white flex gap-2' onClick={closeBurger}>
              {icon}{value}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    )}
    </nav>
  </>
  
  )
}

