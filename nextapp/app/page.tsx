"use client";

// import Image from 'next/image'
import Lottie from "lottie-react";
import animationData from '@/public/lotties/animation.json';
import animationData_original from '@/public/lotties/animation_original.json';
// import UilChartBar from '@iconscout/react-unicons/icons/uil-chart-bar';
// import * as Unicons from '@iconscout/react-unicons';
// <UilReact size="140" color="#61DAFB" />


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full justify-center items-center">
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={true}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Lottie
          animationData={animationData_original}
          className="flex justify-center items-center"
          loop={true}
        />
      </div>
    </main>
  )
}
