import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
var classNames = require('classnames');

const navigation = [
    { name: 'Introduction', href: '#introduction', current: true },
    { name: 'Tokenomics', href: '#tokenomics', current: false },
    { name: 'Exchanges', href: '#exchanges', current: false },
    { name: 'Bridge', href: 'https://app.debridge.finance/deport?inputChain=1&outputChain=56&inputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E&outputCurrency=', current: false },
];

export default function Menu() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="fixed top-0 w-full flex z-30 h-16">
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
                                    item.current ? '  bg-primary rounded-full h-2' : 'bg-primary h-0 group-hover:h-2 ', "rounded-full w-full mt-4 transition-all duration-500"
                                )}></div>
                            </a>

                            {/* <div className="bg-primary h-1 w-0 hover:w-full px-2"></div> */}
                        </div>
                    ))}
                </div>

            </div>
            <nav className="w-full my-4 flex justify-end h-16 px-12 py-4 z-50">
                <div className="flex align-middle " onClick={handleClick}>
                    <div className="h-10 w-10 my-auto text-primary transition-all ease-in-out duration-500 hover:scale-125">{click ? <XMarkIcon /> : <Bars3Icon />}</div>
                </div>
            </nav>

        </div>

    )
}