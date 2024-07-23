"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { GiBatteryPack } from "react-icons/gi";
import {
  FaAlignRight,
  FaTimes,
} from "react-icons/fa";

import {motion} from "framer-motion";
import { usePathname } from 'next/navigation';
export default function Navigation() {
    const [burgered,setBurger] = useState<boolean>(false);

    const closeBurger = () =>{
      (!burgered)?setBurger(true):setBurger(false);
    }
  const navigationList = [
    {id:1,value:"Home"},
    {id:2,value:"Services"},
    {id:3,value:"Projects"},
    {id:4,value:"Gallery"},
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
 const  isActive = (path:string)=>{
  pathName.split('/')
  if(pathName==='/') return pathName===path
  return pathName.split('/')[2]=== path
 }
  return (
    <>
    <nav className='flex justify-between items-center h-32  bg-gray-950 sticky top-0 right-0 z-20 '>
    <div className='h-full w-60 lg:justify-center justify-start items-center flex'>
      <Link href="/" className='text-2xl font-bold text-heading2 flex justify-center items-center  lg:p-2 p-1 border-b-2 border-white'><span><GiBatteryPack className='text-white mr-2'/></span>OKUHLE</Link>
    </div>
    <ul className='lg:w-1/2 lg:flex justify-between items-center hidden'>
     {
      navigationList.map(({id,value})=>(
        <li className={isActive(value)?'active h-20 p-5 flex justify-center items-center text-white':'h-20 p-5 flex justify-center items-center text-white'} key={id}>
          <Link href={`/Okuhle/${value}`} key={id} className='text-xl font-bold text-white'>{value}</Link>
        </li>
      ))
     }
    </ul>
    {burgered ? (
          <button className="w-20 lg:hidden" onClick={closeBurger} type='submit' name='menu'>
            <FaTimes className="text-4xl text-heading2" />
          </button>
        ) : (
          <button className="w-20 lg:hidden" onClick={closeBurger} type='reset' name='menu'>
            <FaAlignRight className="text-4xl text-white" />
          </button>
        )}
    </nav>
    {burgered && (
      <motion.ul  animate={burgered ? "open" : "closed"}
      variants={variants} className='absolute top-32 right-0 flex-col justify-between items-center lg:hidden z-10 bg-black w-full h-full'>
      
     {
        navigationList.map(({id,value})=>(
          <motion.li variants={variantsList} initial="initial" whileInView="open" viewport={{once:true}} custom={id} className={isActive(value)?'active h-20 p-5 flex justify-center items-center text-white':'h-20 p-5 flex justify-center items-center text-white'} key={id}>
            <Link href={`/Okuhle/${value}`} key={id} className='text-xl font-bold text-white' onClick={closeBurger}>{value}</Link>
          </motion.li>
        ))
      }
   
    </motion.ul>
    )

    }
    </>
  )
}
