"use client"
import React,{useRef} from 'react'
import {useForm} from "react-hook-form"
import Image from "next/image"
type emailUs={
  name:String,
  email:String,
  subject:String,
  message:String
}

export default function ContactUsComponent() {
  const {register,handleSubmit,reset,formState} = useForm<emailUs>()
  const {errors} = formState
  const form = useRef<HTMLFormElement>(null);
  const sendEmail= async(data:emailUs)=>{
    reset();
  }
  return (
     <div className="lg:container w-full grid lg:grid-cols-2 grid-cols-1  lg:mx-10 bg-black lg:px-24">
        <form
        ref={form}
          className=" border-2  lg:w-full md:w-4/5 w-full flex flex-col gap-2 items-center justify-center  shadow-md rounded pt-0 pb-3 bg-gradient-to-tr from-black from-80% to-heading border-2 border-heading"
          onSubmit={handleSubmit(sendEmail)}
        >
          <Image src='/logo.jpg' className="" width={700} height={150} alt="logo"/>
          <h1 className="text-blue-700 font-bold text-lg text-center">
            Send Us Email for Enquiries/Quote
          </h1>
          <span className="text-white">All field with <span className="error text-md">*</span > are required before submitting the form</span> 
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="name" className="pl-3 text-blue-700 font-bold">
              Name <span className="text-red-500 text-sm error">*</span> 
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: {
                  value: 3,
                  message: "Name should at least have more than 2 chars",
                },
              })}
              className="w-3/4 h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 bg-gray-100 "
              placeholder="Enter Your Name"
            />
            <span className="text-red-500 text-sm error">
              {errors.name?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="email" className="pl-3 text-blue-700 font-bold">
              Email Address <span className="text-red-500 text-sm error">*</span> 
            </label>
            <input
              type="email"
              id="email"
              {...register("email",{
                pattern:{
                  value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message:'Enter a valid email address'
                },
                required:{
                  value:true,
                  message:'Email address is a required field'
                }
              })}
              className="w-3/4 h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 "
              placeholder="Enter Your Email Address"
            />
            <span className="text-red-500 text-sm error">
              {errors.email?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="subject" className="pl-3 text-blue-700 font-bold">
              Subject <span className="text-red-500 text-sm error">*</span> 
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", {
                required: { value: true, message: "subject is required" },
                minLength: {
                  value: 3,
                  message: "Name should at least have more than 2 chars",
                },
              })}
              className="w-3/4 h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 bg-gray-100 "
              placeholder="Write Subject"
            />
            <span className="text-red-500 text-sm error ">
              {errors.subject?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 pl-3">
            <label htmlFor="message" className="pl-3 text-blue-700 font-bold ">
              Message <span className="text-red-500 text-sm error">*</span> 
            </label>
            <textarea
            id="message"
              {...register("message", {
                required: { value: true, message: "Message is required" },
                minLength: {
                  value: 3,
                  message:
                    "Message should at least have more than 2 characters",
                },
              })}
              className="w-3/4 h-40 pl-3 border rounded border-blue-700 focus:outline-yellow-200"
              placeholder="Write your Message"
            />
            <span className="text-red-500 text-sm error">
              {errors.message?.message}
            </span>
          </div>
          <div className="w-full flex justify-start items-center pl-3">
            <input type="submit" value="Send Email" className="bg-white text-heading font-bold text-lg flex justify-center item-center rounded p-2 shadow-md cursor-pointer hover:shadow-lg hover:shadow-heading"/>

          </div>
        </form>
         <div className='h-[750px] w-full relative  lg:justify-center lg:items-center justify-start border-red-200 lg:flex hidden'>
    <div className='bg-heading rounded-full h-10 w-10 absolute top-0 left-20 z-10 lg:visible invisible'></div>
    <div className='bg-heading rounded-full h-10 w-10 absolute top-96 left-80 lg:visibleinvisible'></div>
    <div className='bg-heading rounded-full h-10 w-10 absolute top-0 right-80 z-10 lg:visible invisible'></div>
      <div className='h-full lg:w-80 w-32 bg-black absolute lg:top-14 lg:left-20 top-14 left-8 rounded-xl'>
        <Image src="/switches.jpg" alt='Sub' width={500} height={1200} className='w-full h-full object-cover rounded-xl '/>
      </div>
      <div className='h-full lg:w-80 w-32 bg-red-400 absolute lg:top-5 lg:left-56 top-5 left-40 rounded-xl opacity-80'>
         <Image src="/switchboards.jpg" alt='Sub' width={500} height={1200} className='w-full h-full object-cover rounded-xl opacity-80 '/>
      </div>
      <div className='h-full lg:w-80 w-32 bg-black absolute lg:top-10 lg:left-96 top-10 right-4 rounded-xl opacity-80'>
         <Image src="/substation.jpg" alt='Sub' width={500} height={1200} className='w-full h-full object-cover rounded-xl opacity-90 '/>
      </div>
    </div>
        
      </div>
  )
}
