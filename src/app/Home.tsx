'use client';
import styles from './page.module.css';
import Video from 'next-video';
import videoLoop from '/videos/grass_01.mov';
import Navbar from '@/components/navbar';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';


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

                    <div className='text-xl text-right bg-secondary/20 backdrop-blur p-8 rounded-xl max-w-maxWide'>
                        <div className='my-4 flex gap-4 w-full pl-1'>
                            <SocialIcon network="telegram" url="https://t.me/buyholdearn" bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="Telegram" />
                            <SocialIcon network="x" url="https://twitter.com/buyholdearn" bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="X" />
                            <SocialIcon network="linkedin" url="https://www.linkedin.com/company/earnecosystem" bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="LinkedIn" />
                            <Link href="https://etherscan.io/address/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E#code">
                                <Image
                                    src="/etherscan.png"
                                    width={122}
                                    height={122}
                                    style={{ width: "25px", height: "auto", opacity: "0.8" }}
                                    alt="etherscan" />
                            </Link>

                        </div>
                        <p className='mb-4 font-semibold text-primary '>
                            Join Touch $GRASS to disconnect from technology, and engage with the physical world, specifically by being in nature or getting fresh air.
                        </p>
                        <div className='my-2 font-semibold text-primary'>
                            <p>BEP20 Contract Address:</p>
                            <p>0xce611ecec4d31a356f4e4c0967b51f3d861f79cb</p>
                        </div>
                        <div className='mt-2 font-semibold text-primary'>
                            <p>ERC20 Contract Address:</p>
                            <p>0xbC68AE53d383f399Cc18268034C5E656fCb839f3</p>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}
