import Image from 'next/image';


export default function Tokenomics() {
    return (
        <section id='tokenomics' className='flex flex-col min-h-screen w-full bg-primary/90 justify-center py-36'>
            <div className='flex flex-col w-max mx-auto'>
                <h1 className='text-secondary text-4xl sm:text-6xl leading-tight align-middle font-semibold uppercase font-heading'>Tokenomics</h1>
                <div className='bg-secondary rounded-full h-1 sm:h-2 w-full'></div>
            </div>
            <div className='flex relative items-start w-full gap-5 mt-20 max-w-4xl mx-auto px-2'>
                <Image
                    className='absolute h-96 w-96 top-[calc(50%-125px)] left-[calc(50%-125px)]'
                    src="/grassy.png"
                    width={500}
                    height={500}
                    style={{ width: "250px", height: "auto" }}
                    alt="grassy"

                />
                <div className="grid grid-cols sm:grid-cols-2 grid-flow-row gap-5 w-full mx-4 text-base sm:text-lg">
                    <div className="grid grid-rows-subgrid grid-flow-cols gap-4 row-span-4">
                        <div className="h-16 flex items-center gap-5 rounded-md border-4 border-secondary bg-white/25 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300 font-bold'>Initial Supply:</h1><h1 className='font-semibold'>1 000 000 000</h1>
                        </div>
                        <div className="h-16 flex items-center gap-5 rounded-md border-4 border-secondary bg-white/25 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300 font-bold'>Circ. Supply:</h1><h1 className='font-semibold'>1 000 000 000</h1>
                        </div>
                        <div className="h-16 flex items-center gap-5 rounded-md border-4 border-secondary bg-white/25 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300 font-bold'>Buy Fee:</h1><h1 className='font-semibold'>0%</h1>
                        </div>
                    </div>
                    <div className="grid grid-rows-subgrid grid-flow-cols gap-4 row-span-4">
                        <div className="h-16 flex items-center gap-5 rounded-md border-4 border-secondary bg-white/25 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300 font-bold'>Ticker:</h1><h1 className='font-semibold'>$GRASS</h1>
                        </div>

                        <div className="h-16 flex items-center gap-5 rounded-md border-4 border-secondary bg-white/25 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300 font-bold  leading-5'>Network</h1><h1 className='font-semibold'>Multi-chain</h1>
                        </div>


                        <div className="h-16 flex items-center gap-5 rounded-md border-4 border-secondary bg-white/25 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300 font-bold'>Sell Fee:</h1><h1 className='font-semibold'>0%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}