'use client'
import Link from 'next/link';
import Image from 'next/image';

import Menu from '@/components/navigation';
import Homepage from '@/components/homepage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar overflow-y-scroll bg-primary z-0">

      <Image
        src="/background_wide.jpg"
        alt="Touch Grass background"
        layout="fill"
        objectFit="cover"
        priority
        className="bg-cover bg-repeat-y"
      ></Image>
      <Link className="fixed top-4 left-3 sm:left-10 md:left-14 flex z-50 h-16 my-4" href="/" target={"_blank"}>
        <Image
          src="/logo.png"
          alt="Touch Grass logo"
          className="border-full m-2 w-auto h-14 hover:scale-110 transition-all duration-500"
          width={80}
          height={80}
        />
      </Link>
      <Menu></Menu>
      <div className='fixed top-0 w-full py-4 flex flex-col justify-between z-20'>

        <Homepage></Homepage>
      </div>

    </main>
  );
}
