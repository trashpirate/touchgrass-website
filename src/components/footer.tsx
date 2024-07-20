import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';

export default function Footer() {
    return (
        <footer className="text-center py-8 px-8 w-full bg-black/50">
            <div className="text-lg text-secondary mx-auto flex flex-row justify-center ">
                <p className="opacity-80 mr-2">
                    Copyright 2024 @
                </p>
                <a className="font-bold hover:opacity-100 opacity-60 transition duriation-500" href="https://t.me/TouchBasedGrass">Touch Grass</a>
            </div>


        </footer>);
}
