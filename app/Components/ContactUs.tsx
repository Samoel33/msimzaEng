"use client"
import React,{useRef} from 'react'
import {useForm} from "react-hook-form"
import Image from "next/image"
import { Building, Target, Eye, Lightbulb, Handshake, TrendingUp } from 'lucide-react';
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
    const infor = await fetch("/api/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const res = await infor.json()
    console.log("infomations",res)
    reset();
  }
  return (
     <div className=" w-full grid lg:grid-cols-2 grid-cols-1  h-full justify-center items-center lg:p-24 p-2">
      <div className=' w-full h-full flex flex-col justify-center items-center  p-2 bg-white rounded-md'>
            <h2 className='lg:text-4xl text-2xl font-bold text-heading mb-5 flex justify-center items-center'><Target className='text-heading  mr-2' size={30}/> Mission Statement</h2>
            <p className='max-w-prose text-gray-600 text-base mb-4'>Our mission is to provide top-notch electrical engineering services that guarantee the safety, reliability, and performance of your electrical infrastructure. We strive to exceed our clients' expectations through innovation, quality workmanship, and unparalleled customer service.</p>
        <div className="w-[700] h-auto p-2">
        <Image src='/logo.jpg' className="object-cover w-full" width={700} height={150} alt="logo"/>
        </div>
        </div>
        <form
        ref={form}
          className="lg:p-none p-2 border-2  w-full flex flex-col gap-2 items-center justify-center shadow-md rounded pt-0 pb-3 bg-white lg:border-2 lg:border-heading"
          onSubmit={handleSubmit(sendEmail)}
        >
          
          <h1 className="lg:text-4xl text-2xl font-bold text-heading mb-5 flex justify-center items-center">
            Send Us Email for Enquiries/Quote
          </h1>
          <span className="text-red-500 font-bold">All field with <span className="error text-md">*</span > are required before submitting the form</span> 
          <div className="w-full flex flex-col gap-2 lg:pl-3">
            <label htmlFor="name" className="lg:pl-3 text-blue-700 font-bold">
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
              className="lg:w-3/4 w-full h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 bg-gray-100 "
              placeholder="Enter Your Name"
            />
            <span className="text-red-500 text-sm error">
              {errors.name?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 lg:pl-3">
            <label htmlFor="email" className="lg:pl-3 text-blue-700 font-bold">
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
              className="lg:w-3/4 w-full h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 "
              placeholder="Enter Your Email Address"
            />
            <span className="text-red-500 text-sm error">
              {errors.email?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 lg:pl-3">
            <label htmlFor="subject" className="lg:pl-3 text-blue-700 font-bold">
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
              className="lg:w-3/4 w-full h-10 border rounded border-blue-700 focus:outline-yellow-200 pl-3 bg-gray-100 "
              placeholder="Write Subject"
            />
            <span className="text-red-500 text-sm error ">
              {errors.subject?.message}
            </span>
          </div>
          <div className="w-full flex flex-col gap-2 lg:pl-3">
            <label htmlFor="message" className="lg:pl-3 text-blue-700 font-bold ">
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
              className="lg:w-3/4 w-full h-40 pl-3 border rounded border-blue-700 focus:outline-yellow-200"
              placeholder="Write your Message"
            />
            <span className="text-red-500 text-sm error">
              {errors.message?.message}
            </span>
          </div>
          <div className="w-full flex justify-start items-center lg:pl-3">
            <input  type="submit" value="Send Email" className="bg-white text-heading font-bold text-lg flex justify-center item-center rounded p-2 shadow-md cursor-pointer hover:shadow-lg hover:shadow-heading"/>
          </div>
        </form>
      </div>
  )
}
