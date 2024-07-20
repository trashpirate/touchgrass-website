'use client'
import Link from 'next/link';
import Image from 'next/legacy/image';

import Menu from '@/components/navigation';
import Homepage from '@/components/homepage';
import Footer from '@/components/footer';

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

      <Menu></Menu>
      <div className='fixed w-full flex flex-col justify-between'>

        <Homepage></Homepage>

      </div>

    </main>
  );
}
