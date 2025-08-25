import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';


export default function Introduction() {
    return (
        <div id="introduction" className='flex justify-end h-screen w-full relative p-4 md:p-16'>
            <div className='mb-8 mr-0 ml-auto mt-auto text-md sm:text-xl text-right bg-secondary/50 backdrop-blur p-8 rounded-xl xs:max-w-maxWide w-full h-fit'>
                <div className='flex gap-4 w-full pl-1 justify-end h-16'>
                    <SocialIcon className=' hover:scale-125 transition-all duration-500 my-auto' network="telegram" url="https://t.me/TouchBasedGrass" bgColor="#0133cc" style={{ height: 30, width: 30 }} label="Telegram" />
                    <SocialIcon className='hover:scale-125 transition-all duration-500  my-auto' network="x" url="https://x.com/TouchBasedGrass" bgColor="#0133cc" style={{ height: 30, width: 30 }} label="X" />
                    <Link href="https://www.dextools.io/app/en/base/pair-explorer/0x2aa08a2502dba730a70467031194451d3e5e9f93?t=1721325793018" className='hover:scale-125 transition-all duration-500  my-auto'>
                        <Image
                            src="/dextools_blue.svg"
                            width={122}
                            height={122}
                            style={{ width: "25px", height: "auto" }}
                            alt="dextools touch grass"
                        />
                    </Link>
                    <Link href="https://www.dextools.io/app/en/solana/pair-explorer/Gv1FPBMtVPCmn2WmHu67J4GmGqmp9khANzMZk8hCZ1tv?t=1732307728392" className='hover:scale-125 transition-all duration-500  my-auto'>
                        <Image
                            src="/dextools_sol.svg"
                            width={122}
                            height={122}
                            style={{ width: "25px", height: "auto" }}
                            alt="dextools touch grass"
                        />
                    </Link>
                    <Link href="https://basescan.org/address/0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356" className='hover:scale-125 transition-all duration-500  my-auto'>
                        <Image
                            src="/basechain_blue.svg"
                            width={122}
                            height={122}
                            style={{ width: "30px", height: "auto" }}
                            alt="basescan touch grass"
                        />
                    </Link>
                    <Link href="https://solscan.io/token/3T3R5KTAXgMF5KVw6v38qUfSUernCHQwYFzfVo1jdjMX" className='hover:scale-125 transition-all duration-500  my-auto'>
                        <Image
                            src="/solscan.png"
                            width={122}
                            height={122}
                            style={{ width: "30px", height: "auto" }}
                            alt="solscan touch grass"
                        />
                    </Link>

                </div>
                <p className='mb-4 font-semibold text-textColor '>
                    Join Touch $GRASS to disconnect from technology, and engage with the physical world, specifically by being in nature or getting fresh air.
                </p>
                <div className='mt-2 font-semibold text-textColor flex flex-col justify-end w-full'>
                    <div className='my-1'>
                        <p className='text-sm'>Base Contract:</p>
                        <CopyToClipboard
                            text="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
                            copyText="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
                            textColor='text-primary'
                            textSize='text-sm'
                            iconSize='text-[10px]'
                        />
                    </div>
                    <div className='my-1'>
                        <p className='text-sm'>Solana Contract:</p>
                        <CopyToClipboard
                            text="3T3R5KTAXgMF5KVw6v38qUfSUernCHQwYFzfVo1jdjMX"
                            copyText="3T3R5KTAXgMF5KVw6v38qUfSUernCHQwYFzfVo1jdjMX"
                            textColor='text-primary'
                            textSize='text-sm'
                            iconSize='text-[10px]'
                        />
                    </div>
                    <div className='my-1'>
                        <p className='text-sm'>Abstract Contract:</p>
                        <CopyToClipboard
                            text="0xacc89525051944e27befc51232137897cadabdc8"
                            copyText="0xacc89525051944e27befc51232137897cadabdc8"
                            textColor='text-primary'
                            textSize='text-sm'
                            iconSize='text-[10px]'
                        />
                    </div>
                    <div className='my-1'>
                        <p className='text-sm'>Avalanche Contract:</p>
                        <CopyToClipboard
                            text="0x0b660e6d0baad53d5f4223e81d76e61cc3c4d739"
                            copyText="0x0b660e6d0baad53d5f4223e81d76e61cc3c4d739"
                            textColor='text-primary'
                            textSize='text-sm'
                            iconSize='text-[10px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}