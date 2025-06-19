import { Metadata } from 'next'
import React,{useRef} from 'react'
import ContactUsComponent from "@/app/Components/ContactUs";

export const metadata: Metadata = {
  title: 'Okuhle Msimza Engineering | Contact Us',
  description: 'For inquiries, feedback, or to learn more about our services, please reach out to us through our contact form or email us directly. We look forward to hearing from you!',
}
export default function ContactUs() {
  return (
   <ContactUsComponent/>
  )
}
