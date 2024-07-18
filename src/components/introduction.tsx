import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';


export default function Introduction() {
    return (
        <div id="introduction" className='flex justify-end h-[calc(100vh-6rem)] w-full relative p-4 md:p-16'>
            <div className='mb- mr-0 ml-auto mt-auto text-md sm:text-xl text-right bg-secondary/80 backdrop-blur p-8 rounded-xl xs:max-w-maxWide w-full h-fit'>
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
                    <Link href="https://basescan.io/address/0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356" className='hover:scale-125 transition-all duration-500  my-auto'>
                        <Image
                            src="/basechain_blue.svg"
                            width={122}
                            height={122}
                            style={{ width: "30px", height: "auto" }}
                            alt="basescan touch grass"
                        />
                    </Link>

                </div>
                <p className='mb-4 font-semibold text-textColor '>
                    Join Touch $GRASS to disconnect from technology, and engage with the physical world, specifically by being in nature or getting fresh air.
                </p>
                <div className='mt-2 font-semibold text-textColor flex flex-col justify-end w-full'>
                    <div>
                        <p className='text-sm'>Contract Address:</p>
                        <CopyToClipboard
                            text="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
                            copyText="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
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