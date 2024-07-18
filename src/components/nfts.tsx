import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';


export default function Nfts() {
    return (
        <div id='nfts' className='flex flex-col h-fit w-full relative py-36 bg-black/60'>
            <div className='flex flex-col w-max mx-auto'>
                <h1 className='text-textColor text-4xl sm:text-6xl leading-tight align-middle font-semibold uppercase font-heading'>Touch Grassy</h1>
                <div className='bg-textColor rounded-full h-1 sm:h-2 w-full'></div>
            </div>
            <Image
                className='mx-auto my-16'
                src="/grassy.png"
                width={500}
                height={500}
                style={{ width: "auto", height: "250px" }}
                alt="touch grassy"
            />
            <div className='flex flex-row mx-auto gap-8 w-full max-w-5xl flex-wrap-reverse px-4 justify-center'>
                <div className="p-8 text-textColor w-full sm:w-fit mx-auto bg-secondary/40 rounded-xl">
                    <h1 className='text-xl font-heading uppercase text-center my-2'>Stats</h1>
                    <h2 className='opacity-70 text-lg text-center'>Total: 1000 NFTs</h2>
                    <h2 className='opacity-70 text-lg text-center'>Minted: 1000 NFTs</h2>
                    <table className="w-full text-left border-spacing-x-6 border-separate mt-8">
                        <thead className=" flex-grow font-bold text-xl font-heading">
                            <tr >
                                <th >TRAITS</th>
                                <th>RARITY</th>
                            </tr>
                        </thead>
                        <tbody className="w-fit text-base font-semibold">
                            <tr>
                                <td>GREEN</td>
                                <td>79 %</td>
                            </tr>
                            <tr>
                                <td>BLUE</td>
                                <td>10 %</td>
                            </tr>
                            <tr>
                                <td>YELLOW</td>
                                <td>8 %</td>

                            </tr>
                            <tr>
                                <td>RED</td>
                                <td>2 %</td>
                            </tr>
                            <tr>
                                <td>PURPLE</td>
                                <td>1 %</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="p-8 text-textColor w-full max-w-xl mx-auto bg-secondary/40 rounded-xl">
                    <p className='text-center mx-auto'>Touch Grassy, reduce stress, and improve your mood by disconnecting from technology and engaging with the physical world.</p>

                    <div className='my-4'>
                        <p className='text-center mx-auto my-2'>Touch Grassy holders receive revenue share from the Touch Grass treasury.</p>
                        <div className=''>
                            <h2 className='uppercase font-heading mx-auto'>Treasury Holdings</h2>
                            <div className='gap-2 align-middle leading-4 mb-2 flex flex-row w-48'>
                                <CopyToClipboard
                                    text="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
                                    copyText="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
                                    textColor='text-textColor'
                                    textSize='text-sm'
                                    iconSize='text-[10px]'
                                />
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}