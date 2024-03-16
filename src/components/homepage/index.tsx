import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from '../copyToClipboard';


export default function Homepage() {
    return (
        <div className='flex justify-end pb-8'>

            <div className='text-md sm:text-xl text-right bg-secondary/20 backdrop-blur p-8 rounded-xl xs:max-w-maxWide w-full'>
                <div className='my-4 flex gap-4 w-full pl-1 justify-end'>
                    <SocialIcon network="telegram" url="https://t.me/touchinggrass" bgColor="#059669" style={{ height: 30, width: 30 }} label="Telegram" />
                    <SocialIcon network="x" url="https://twitter.com/TouchFreshGrass" bgColor="#059669" style={{ height: 30, width: 30 }} label="X" />
                    <Link href="https://etherscan.io/address/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E#code">
                        <Image
                            src="/etherscan.png"
                            width={122}
                            height={122}
                            style={{ width: "30px", height: "auto", opacity: "0.8" }}
                            alt="etherscan"
                        />
                    </Link>

                </div>
                <p className='mb-4 font-semibold text-primary '>
                    Join Touch $GRASS to disconnect from technology, and engage with the physical world, specifically by being in nature or getting fresh air.
                </p>
                <div className='mt-2 font-semibold text-primary flex flex-col justify-end w-full'>
                    <div>
                        <p className='text-sm'>ERC20 Contract Address:</p>
                        <CopyToClipboard
                            text="0xbC68AE53d383f399Cc18268034C5E656fCb839f3"
                            copyText="0xbC68AE53d383f399Cc18268034C5E656fCb839f3"
                            textColor='text-primary'
                            textSize='text-xs'
                            iconSize='text-[10px]'
                        />
                    </div>
                </div>
                <div className='mt-2 font-semibold text-primary flex flex-col justify-end w-full'>
                    <div>
                        <p className='text-sm' >BEP20 Contract Address:</p>
                        <CopyToClipboard
                            text="0xbC68AE53d383f399Cc18268034C5E656fCb839f3"
                            copyText="0xbC68AE53d383f399Cc18268034C5E656fCb839f3"
                            textColor='text-primary'
                            textSize='text-xs'
                            iconSize='text-[10px]'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}