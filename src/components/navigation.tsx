'use client'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";

import LinkButton from "./buttons/linkButton";
import Link from "next/link";
import SmoothScrollLink from "./scrollLink";

var classNames = require('classnames');
const navigation = [
    { id: 0, name: 'Introduction', href: '#introduction', current: true },
    { id: 1, name: 'Tokenomics', href: '#tokenomics', current: false },
    { id: 2, name: 'NFTs', href: '#nfts', current: false },
];

export default function Menu() {
    const [click, setClick] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("");

    const handleClick = () => setClick(!click);

    return (
        <nav className="relative w-full flex h-24 justify-between pr-5 sm:pr-10 md:pr-16 font-heading ">
            <div className="fixed top-50 bg-white/10 z-30 backdrop-blur-md w-full h-24"></div>
            <div className={classNames(click ? "top-0" : "top-full", "flex fixed h-full w-full bg-secondary z-30 transition-all ease-in-out duration-500")}>
                <ul className="flex flex-col mx-auto max-w-96 my-auto space-y-8 text-center">

                    {navigation.map((item) => (
                        <li key={item.id} className="h-16 w-fit mx-auto">
                            <Link
                                href={item.href}
                                className='text-primary rounded-md text-2xl sm:text-4xl leading-4 align-middle mx-auto font-semibold uppercase group'
                                onClick={() => { setActiveSection(item.href); setClick(!click) }}
                            >
                                {item.name}
                                <div key={item.id} className={classNames(
                                    item.href == activeSection ? '  bg-primary rounded-full h-2' : 'bg-primary h-0 group-hover:h-2 ', "rounded-full w-full transition-all duration-500"
                                )}></div>
                            </Link>
                            {/* <div className="bg-primary h-1 w-0 hover:w-full px-2"></div> */}
                        </li>
                    ))}
                </ul>

            </div>

            <div className="w-full flex absolute top-4 justify-between h-16 px-4 sm:px-8 md:px-12 z-40">
                <Link className="hover:scale-110 flex h-16 w-16 transition-all duration-500" href="/">
                    <Image
                        src="/logo.png"
                        alt="Touch Grass logo"
                        className="border-full m-1 w-auto h-14"
                        width={64}
                        height={64}
                    />
                </Link>
                <div className="flex align-middle " onClick={handleClick}>
                    <div className="h-12 w-12 my-auto text-primary transition-all ease-in-out duration-500 hover:scale-125">{click ? <XMarkIcon /> : <Bars3Icon />}</div>
                </div>

            </div>

            <div className="hidden absolute left-1/4 top-6 lg:ml-6 lg:flex m-auto w-1/2 justify-center z-50">
                {!click &&
                    <nav className="flex space-x-8 h-full align-middle mx-auto text-2xl leading-tight">
                        {navigation.map((item) => (
                            <div key={item.id}
                                className={classNames(
                                    item.href == activeSection ? '  text-primary' : 'text-black',
                                    'justify-end flex font-semibold uppercase group flex-col gap-0 pb-1'
                                )}
                                onClick={() => { setActiveSection(item.href) }}
                            >
                                <SmoothScrollLink
                                    href={item.href}
                                >
                                    {item.name}
                                </SmoothScrollLink>
                                <div className={classNames(
                                    item.href == activeSection ? '  bg-primary rounded-full w-full' : 'bg-black w-0 group-hover:w-full ', "rounded-full h-1 transition-all duration-500"
                                )}></div>
                            </div>


                        ))}
                        <div><LinkButton buttonText="BUY $GRASS" externalLink="https://app.uniswap.org/swap?chain=base&outputCurrency=0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"></LinkButton></div>

                    </nav>
                }
            </div>

        </nav>


    )
}