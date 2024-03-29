import { Menu, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';
var classNames = require('classnames');

export default function BuyButton() {
    return (
        <div className="">

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3 my-auto">
                <div>
                    <Menu.Button className="relative flex rounded-md bg-secondary/50 text-sm hover:bg-green-300/70 ">
                        <div className="px-3 py-1 w-max flex items-center gap-2 bg-white/5 ">
                            <div className="font-bold hidden xxs:inline text-primary uppercase text-md">BUY $GRASS</div>
                            <PlusIcon className="h-4 xs:h-6 w-4 xs:w-4 text-primary" aria-hidden="true" />
                        </div>
                        <span className="sr-only"></span>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-secondary/50 backdrop-blur-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="https://app.uniswap.org/swap?outputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
                                    className={classNames(active ? 'bg-highlight/50' : '', 'block px-4 py-2 text-sm text-primary font-bold')}
                                >
                                    Buy on Uniswap (ETH)
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x2aC895fEba458B42884DCbCB47D57e44c3a303c8"
                                    className={classNames(active ? 'bg-highlight/50' : '', 'block px-4 py-2 text-sm text-primary font-bold')}
                                >
                                    Buy on PancakeSwap (BNB)
                                </a>
                            )}
                        </Menu.Item>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}