import { Metadata } from 'next'
import AboutUsCompoonent from '@/app/Components/AboutUs'
import React from 'react'

export const metadata: Metadata = {
  title: 'Okuhle Msimza Engineering | About Us',
  description: 'Okuhle Msimza Engineering is a specialized engineering firm dedicated to the commissioning, installation, and testing of Medium Voltage (MV) and Low Voltage (LV) switchgear systems.',}
export default function AboutUs() {
  return (
    <AboutUsCompoonent/>
  )
}
