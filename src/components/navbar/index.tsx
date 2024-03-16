var classNames = require('classnames');
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import BuyButton from '../buttons';
import Link from 'next/link';

const navigation = [
    { name: 'Introduction', href: '#introduction', current: true },
    { name: 'Tokenomics', href: '#tokenomics', current: false },
    { name: 'Buy', href: '#buy', current: false },
    { name: 'Products', href: '#products', current: false },
    { name: 'Exchanges', href: '#exchanges', current: false },
    { name: 'Bridge', href: 'https://app.debridge.finance/deport?inputChain=1&outputChain=56&inputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E&outputCurrency=', current: false },
];

export default function Navbar() {
    return (
        <nav className="top-0 w-full z-20 my-4 flex justify-between">
            <Link className="flex px-5 py-15 text-center h-16 align-middle" href="https://touchfreshgrass.com/" target={"_blank"}>
                <Image
                    src="/logo.png"
                    alt="GRASS logo"
                    className="border-full p-2 w-auto h-full"
                    width={100}
                    height={100}
                    priority
                />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 my-auto h-full">
                    {navigation.map((item) => (
                        <div>
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? '  text-primary' : 'text-secondary',
                                    'rounded-md py-2 text-md leading-4 align-middle my-auto font-semibold uppercase group'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                                <div className={classNames(
                                    item.current ? '  bg-primary rounded-full w-full' : 'bg-secondary w-0 group-hover:w-full ', "rounded-full h-1 mt-1 transition-all duration-500"
                                )}></div>
                            </a>

                            {/* <div className="bg-primary h-1 w-0 hover:w-full px-2"></div> */}
                        </div>
                    ))}
                </div>
            </div>

            <Link className="flex px-5 py-15 text-center h-16 align-middle" href="https://touchfreshgrass.com/" target={"_blank"}>
                <Image
                    src="/logo.png"
                    alt="GRASS logo"
                    className="border-full p-2 w-auto h-full"
                    width={100}
                    height={100}
                    priority
                />
            </Link>
        </nav>
    );
}