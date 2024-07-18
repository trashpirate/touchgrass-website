import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';


export default function Exchanges() {
    return (
        <div id='exchanges' className='flex flex-col h-[1000px] w-full relative pt-48 bg-black/60'>
            <div className='flex flex-col w-max mx-auto'>
                <h1 className='text-textColor text-4xl sm:text-6xl leading-tight align-middle font-semibold uppercase font-heading'>Exchanges</h1>
                <div className='bg-textColor rounded-full h-1 sm:h-2 w-full'></div>
            </div>

        </div>
    )
}