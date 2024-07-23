
import React from 'react'
import dynamic from 'next/dynamic';

const HomeComponent= dynamic(() => import('../../../Components/Home'), { ssr: false });
export default function Home() {
  return (
   <HomeComponent/>
  )
}
