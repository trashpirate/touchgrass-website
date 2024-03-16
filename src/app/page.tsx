'use client'
import styles from './page.module.css'
import Video from 'next-video';
import videoLoop from '/videos/grass_01.mov'; // use your video file name
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '@/components/navbar';

import Menu from '@/components/menu';
import Homepage from '@/components/homepage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar overflow-y-scroll bg-primary z-0">

      <Video
        src={videoLoop}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className={styles.video}
      ></Video>
      <Link className="fixed top-0 left-10 flex z-50 h-16 my-4" href="https://touchfreshgrass.com/" target={"_blank"}>
        <Image
          src="/logo.png"
          alt="GRASS logo"
          className="border-full p-2 w-auto h-full"
          width={100}
          height={100}
          priority
        />
      </Link>
      <Menu></Menu>
      <div className='fixed top-0 w-full px-8 sm:px-12 py-4 flex flex-col justify-between h-full z-20'>
        <Navbar></Navbar>
        <Homepage></Homepage>
      </div>

    </main>
  );
}
