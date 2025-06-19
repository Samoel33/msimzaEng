import { Metadata } from 'next'
import React,{useRef} from 'react'
import ServicesComponent from '../Components/Services'

export const metadata: Metadata = {
  title: 'Okuhle Msimza Engineering | Services',
  description: 'Okuhle Msimza Engineering offers a wide range of services in the field of electrical engineering, specializing in the commissioning, installation, and testing of Medium Voltage (MV) and Low Voltage (LV) switchgear systems.',
}
export default function Services() {
 return <ServicesComponent/>
}
