import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Okuhle Msimza Engineering',
  description: 'Okuhle Msimza Engineering, Offer wide range of services in the field of electrical engineering, specializing in the commissioning, installation, and testing of Medium Voltage (MV) and Low Voltage (LV) switchgear systems.',
}
import HomeComponent from "@/app/Components/Home";
export default function Home() {
  return (
   <HomeComponent/>
  )
}