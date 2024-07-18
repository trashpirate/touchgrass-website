import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';


export default function Footer() {
    return (
        <div className='flex flex-row h-48 w-full bg-black justify-between align-middle flex-wrap pt-8 sm:px-16'>
            <div className="text-sm sm:text-lg text-secondary flex flex-row justify-center w-fit h-fit mx-auto sm:mx-2">
                <p className="opacity-80 mr-2">
                    Copyright 2024 @
                </p>
                <Link className="font-bold hover:opacity-100 opacity-60 transition duriation-500" href="https://t.me/TouchBasedGrass">Touch Grass</Link>
            </div>
            <div className="text-sm sm:text-lg text-secondary flex flex-row justify-center w-fit h-fit mx-auto sm:mx-2">
                <p className="opacity-80 mr-2">
                    Powered by
                </p>
                <Link className="font-bold hover:opacity-100 opacity-60 transition duriation-500" href="https://t.me/EARNServices">EARN Services</Link>
            </div>

            {/* <div className='mx-auto mt-8 h-fit w-fit'>Footer</div> */}
        </div>
    )
}