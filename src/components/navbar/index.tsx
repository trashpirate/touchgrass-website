'use client'
var classNames = require('classnames');
import BuyButton from '../buttons';

const navigation = [
    { name: 'Introduction', href: '#introduction', current: true },
    { name: 'Tokenomics', href: '#tokenomics', current: false },
    { name: 'Exchanges', href: '#exchanges', current: false },
    { name: 'Bridge', href: 'https://app.debridge.finance/deport?inputChain=1&outputChain=56&inputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E&outputCurrency=', current: false },
];

export default function Navbar() {
    return (
        <nav className="top-0 w-full my-4 flex justify-center h-16 ">


            {/* <div className="h-10 w-10"></div> */}

        </nav>
    );
}