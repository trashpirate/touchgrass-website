'use client'
import styles from './page.module.css'
import Video from 'next-video';
import videoLoop from '/videos/grass_01.mov'; // use your video file name
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar overflow-y-scroll bg-primary">

      <Video
        src={videoLoop}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className={styles.video}
      >
      </Video>
      <div className='fixed top-0 w-full px-12 py-4 flex flex-col justify-between h-full'>
        <Navbar></Navbar>
        <div className='flex justify-end'>

          <div className='text-right bg-secondary/20 backdrop-blur p-4 rounded-xl max-w-maxWide'>
            <p className='my-2 font-semibold text-primary '>
              Join Touch $GRASS to disconnect from technology, and engage with the physical world, specifically by being in nature or getting fresh air.
            </p>
            <div className='my-2 font-semibold text-primary'>
              <p>BEP20 Contract Address:</p>
              <p>0xce611ecec4d31a356f4e4c0967b51f3d861f79cb</p>
            </div>
            <div className='my-2 font-semibold text-primary'>
              <p>ERC20 Contract Address:</p>
              <p>0xbC68AE53d383f399Cc18268034C5E656fCb839f3</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
