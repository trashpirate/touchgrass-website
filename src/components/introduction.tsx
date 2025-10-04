

'use client';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';
import { useState } from 'react';



const contractAddresses: { [key: string]: string } = {
    'Base': '0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356',
    'Solana': '3T3R5KTAXgMF5KVw6v38qUfSUernCHQwYFzfVo1jdjMX',
    'Abstract': '0xacc89525051944e27befc51232137897cadabdc8',
    'Avalanche': '0x0b660e6d0baad53d5f4223e81d76e61cc3c4d739'
};

const blockchainExplorers: { [key: string]: string } = {
    'Base': 'https://basescan.org/address/',
    'Solana': 'https://solscan.io/token/',
    'Abstract': 'https://abstrascan.com/address/',
    'Avalanche': 'https://snowtrace.io/address/'
};

const chartLinks: { [key: string]: string } = {
    'Base': 'https://www.dextools.io/app/en/base/pair-explorer/0x2aa08a2502dba730a70467031194451d3e5e9f93?t=1721325793018',
    'Solana': 'https://www.dextools.io/app/en/solana/pair-explorer/Gv1FPBMtVPCmn2WmHu67J4GmGqmp9khANzMZk8hCZ1tv?t=1732307728392',
    'Abstract': 'https://www.dextools.io/app/en/abstract/pair-explorer/0xacc89525051944e27befc51232137897cadabdc8?t=1721325793018',
    'Avalanche': 'https://www.dextools.io/app/en/avalanche/pair-explorer/0x0b660e6d0baad53d5f4223e81d76e61cc3c4d739?t=1721325793018'
};


export default function Introduction() {
    const [selectedBlockchain, setSelectedBlockchain] = useState<string>('Base');

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

                    <Link href="https://basescan.org/address/0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356" className='hover:scale-125 transition-all duration-500  my-auto'>
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
                    <div className='my-1 w-48 ml-auto mr-0'>
                        <p className='text-base mb-2'>We are multi-chain 👇</p>
                        <select
                            value={selectedBlockchain}
                            onChange={(e) => setSelectedBlockchain(e.target.value)}
                            className='mb-3 px-3 py-2 bg-secondary/70 backdrop-blur border border-primary/30 rounded-lg text-textColor text-sm focus:outline-none focus:border-primary transition-all duration-200 w-full'
                        >
                            {Object.keys(contractAddresses).map((blockchain) => (
                                <option key={blockchain} value={blockchain} className='bg-secondary text-textColor'>
                                    {blockchain}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='my-1'>
                        {/* <p className='text-sm'>{selectedBlockchain} Contract:</p> */}

                        <CopyToClipboard
                            text={contractAddresses[selectedBlockchain]}
                            copyText={contractAddresses[selectedBlockchain]}
                            textColor='text-primary'
                            textSize='text-[15px]'
                            iconSize='text-[10px]'
                            link={blockchainExplorers[selectedBlockchain] + contractAddresses[selectedBlockchain]}
                        />
                        <div className='flex gap-3 w-full pl-1 justify-end h-fit text-sm  text-primary'>
                            <Link href={chartLinks[selectedBlockchain]} target='_blank' className='hover:scale-110 transition-all duration-500  my-auto bg-secondary/70 px-4 py-1 rounded-lg hover:text-textColor'>
                                Chart
                            </Link>
                            <Link href={blockchainExplorers[selectedBlockchain] + contractAddresses[selectedBlockchain]} target='_blank' className='hover:scale-110 transition-all duration-500  my-auto bg-secondary/70 px-4 py-1 rounded-lg hover:text-textColor'>
                                Scan
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}