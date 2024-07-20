'use client'
import Image from 'next/legacy/image';

import Navbar from '@/components/navbar/navbar';
import Homepage from '@/components/homepage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar overflow-y-scroll bg-primary relative ">
      <Image
        src="/background_wide.jpg"
        alt="Touch Grass background"
        layout="fill"
        objectFit="cover"
        priority
        className="bg-cover bg-repeat-y"
      ></Image>
      <Navbar></Navbar>
      <div className='fixed w-full flex flex-col justify-between'>
        <Homepage></Homepage>
      </div>
    </main>
  );
}
