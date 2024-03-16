import styles from './page.module.css'
import Video from 'next-video';
import videoLoop from '/videos/grass_01.mov'; // use your video file name
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between no-scrollbar overflow-y-scroll">

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
      <div className='fixed top-0 w-full px-12 py-4'>
        <Navbar></Navbar>

      </div>

    </main>
  );
}
