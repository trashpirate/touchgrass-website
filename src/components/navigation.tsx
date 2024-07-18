'use client'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { useState } from "react";
var classNames = require('classnames');
import BuyButton from './buttons/buyButton';
import LinkButton from "./buttons/linkButton";
const navigation = [
    { name: 'Introduction', href: '#introduction', current: true },
    { name: 'Tokenomics', href: '#tokenomics', current: false },
    { name: 'NFTs', href: '#nfts', current: false },
];

export default function Menu() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="fixed top-4 w-full flex z-30 h-16 my-4 justify-between pr-5 sm:pr-10 md:pr-16 font-heading">

            <div className={classNames(click ? "top-0" : "top-full", "flex fixed h-full w-full bg-secondary z-40 transition-all ease-in-out duration-500")}>
                <div className="flex flex-col mx-auto max-w-96 my-auto space-y-8 text-center">

                    {navigation.map((item) => (
                        <div className="h-16 w-fit mx-auto">
                            <a
                                key={item.name}
                                href={item.href}
                                className='text-primary rounded-md text-2xl sm:text-4xl leading-4 align-middle mx-auto font-semibold uppercase group z-50'
                                aria-current={item.current ? 'page' : undefined}
                                onClick={handleClick}
                            >
                                {item.name}
                                <div className={classNames(
                                    item.current ? '  bg-primary rounded-full h-2' : 'bg-primary h-0 group-hover:h-2 ', "rounded-full w-full transition-all duration-500"
                                )}></div>
                            </a>

                            {/* <div className="bg-primary h-1 w-0 hover:w-full px-2"></div> */}
                        </div>
                    ))}
                </div>

            </div>
            <div className=" h-16 w-16  z-50"></div>
            {click ? <></> :
                <div className="hidden lg:ml-6 lg:flex m-auto z-50 w-full  justify-center">
                    <div className="flex space-x-4 h-full align-middle mx-auto text-2xl leading-tight">
                        {navigation.map((item) => (
                            <div className="my-auto ">
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? '  text-primary' : 'text-black',
                                        'rounded-md py-2 leading-4 align-middle my-auto font-semibold uppercase group'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                    <div className={classNames(
                                        item.current ? '  bg-primary rounded-full w-full' : 'bg-black w-0 group-hover:w-full ', "rounded-full h-1 transition-all duration-500"
                                    )}></div>
                                </a>

                                {/* <div className="bg-primary h-1 w-0 hover:w-full px-2"></div> */}
                            </div>
                        ))}
                        <LinkButton buttonText="BUY $GRASS" externalLink="https://app.uniswap.org/swap?chain=base&outputCurrency=0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"></LinkButton>
                    </div>
                </div>}

            <nav className="w-16 flex justify-end h-16 z-50">
                <div className="flex align-middle " onClick={handleClick}>
                    <div className="h-12 w-12 my-auto text-primary transition-all ease-in-out duration-500 hover:scale-125">{click ? <XMarkIcon /> : <Bars3Icon />}</div>
                </div>
            </nav>

        </div>

    )
}