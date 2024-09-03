
import Image from 'next/image';

import { useEffect, useState } from 'react';
import TokenAddressInput from './tokenAddressInput';
import LinkButton from './buttons/linkButton';
import { assert } from 'console';

function getTokenBalanceString(amount: number, symbol: string, precision: number) {
    let text: string;
    if (symbol == 'USD') {
        text = `$${amount.toLocaleString(undefined, {
            minimumFractionDigits: precision,
            maximumFractionDigits: precision,
        })}`
    }
    else {
        text = `${amount.toLocaleString(undefined, {
            minimumFractionDigits: precision,
            maximumFractionDigits: precision,
        })}${String.fromCharCode(8239)} ${symbol}`
    }
    return text;
}



export default function Nfts() {

    const [treasuryBalance, setTreasuryBalance] = useState<number>(0);
    const [totalSupply, setTotalSupply] = useState<number>(0);
    const [reward, setReward] = useState<string>("");
    const [rewardUsd, setRewardUsd] = useState<string>("");
    const [treasuryBalanceUsd, setTreasuryBalanceUsd] = useState<string>("");
    const [walletInput, setWallet] = useState('');
    const [earnPrice, setEarnPrice] = useState<number>(0);

    useEffect(() => {
        try {
            fetch("/api/treasury-earn-balance", { cache: 'force-cache', next: { revalidate: 300 } }).then(data => data.json()).then(
                result => setTreasuryBalance(Number(result))

            );

        } catch (error) {
            setTreasuryBalance(0);
        }

    }, [])

    useEffect(() => {
        try {
            fetch("/api/earn-price", { cache: 'force-cache', next: { revalidate: 300 } }).then(data => data.json()).then(
                result => setEarnPrice(Number(result))

            );
        } catch (error) {
            setEarnPrice(0);
        }

    }, [])

    useEffect(() => {
        setTreasuryBalanceUsd(getTokenBalanceString(treasuryBalance * earnPrice, 'USD', 2));
    }, [earnPrice, treasuryBalance])

    useEffect(() => {
        function getTotalSupply() {
            fetch("/api/nft-total-supply", { cache: 'force-cache', next: { revalidate: 300 } }).then(data => data.json()).then(
                result => setTotalSupply(Number(result))
            );
        }
        getTotalSupply();
    }, [])

    const handleWalletChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setWallet(value);

        if (value.slice(0, 2) == "0x" && value.length == 42) {

            fetch("/api/wallet-nft-multiplier?wallet=" + value, { cache: 'force-cache', next: { revalidate: 300 } }).then(data => data.json()).then(multiplier => {
                const reward = treasuryBalance * multiplier;
                setReward(getTokenBalanceString(reward, 'EARN', 0));
                setRewardUsd(getTokenBalanceString(reward * earnPrice, 'USD', 2));
            });

        }
        else {
            setReward(getTokenBalanceString(0, 'EARN', 0))
            setReward(getTokenBalanceString(0, 'USD', 2));
        }
    };

    return (
        <section id='nfts' className='flex flex-col min-h-screen w-full relative py-36 bg-black/60'>
            <div className='flex flex-col w-max mx-auto'>
                <h1 className='text-textColor text-4xl sm:text-6xl leading-tight align-middle font-semibold uppercase font-heading'>Touch Grassy</h1>
                <div className='bg-textColor rounded-full h-1 sm:h-2 w-full'></div>
            </div>
            <Image
                className='mx-auto my-16'
                src="/grassy.png"
                width={500}
                height={500}
                style={{ width: "auto", height: "250px" }}
                alt="touch grassy"
            />
            <div className='flex flex-row mx-auto gap-8 w-full max-w-5xl flex-wrap-reverse px-4 justify-center sm:h-96'>
                <div className="p-8 text-textColor w-full sm:w-fit mx-auto bg-secondary/40 rounded-xl h-full flex flex-col justify-between">
                    <div>
                        <h1 className='text-xl font-bold font-heading uppercase text-center my-2'>Stats</h1>
                        <div className='w-full flex flex-row justify-between text-lg'><h2>Total:</h2><h2>1000 NFTs</h2></div>
                        <div className='w-full flex flex-row justify-between text-lg'><h2>Minted:</h2><h2>{`${totalSupply} NFTs`}</h2></div>
                    </div>

                    <table className="w-full text-left border-spacing-x-6 border-separate mt-8">
                        <thead className=" flex-grow font-bold text-xl font-heading">
                            <tr >
                                <th >TRAITS</th>
                                <th>RARITY</th>
                            </tr>
                        </thead>
                        <tbody className="w-fit text-base font-semibold">
                            <tr >
                                <td>GREEN</td>
                                <td>79 %</td>
                            </tr>
                            <tr>
                                <td>BLUE</td>
                                <td>10 %</td>
                            </tr>
                            <tr>
                                <td>YELLOW</td>
                                <td>8 %</td>

                            </tr>
                            <tr>
                                <td>RED</td>
                                <td>2 %</td>
                            </tr>
                            <tr>
                                <td>PURPLE</td>
                                <td>1 %</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="p-8 text-textColor w-full max-w-xl mx-auto bg-secondary/40 rounded-xl h-full flex flex-col justify-between gap-10">
                    <div className='flex flex-col justify-center'>
                        <div className='text-2xl leading-tight font-heading mx-auto'>
                            <LinkButton buttonText=' MINT ' externalLink='https://app.touchbasedgrass.com'></LinkButton></div>
                        <div className='text-lg text-center mx-auto my-4 opacity-70'>
                            Touch Grassy NFT holders receive monthly revenue share from the Touch Grass treasury balance.
                        </div>

                    </div>
                    <div className='w-full sm:h-80 flex justify-end'>
                        <div className='flex flex-row justify-between w-full h-full flex-wrap'>
                            <div className='flex flex-col w-fit h-full mb-8 sm:mb-auto'>
                                <div className=''>
                                    <h2 className='uppercase font-heading font-bold text-xl mb-4'>Treasury Holdings</h2>

                                    {/* <div className='gap-2 align-middle leading-4 my-auto flex flex-row w-48'>
                                        <CopyToClipboard
                                            text="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
                                            copyText="0xbb4f69a0fca3f63477b6b3b2a3e8491e5425a356"
                                            textColor='text-textColor'
                                            textSize='text-sm'
                                            iconSize='text-[10px]'
                                        />
                                    </div> */}
                                </div>

                                <div className=' h-full flex flex-col justify-between'>
                                    <div className='flex flex-row gap-2'>
                                        <div className='font-semibold text-lg my-auto'>{`${getTokenBalanceString(treasuryBalance, "EARN", 0)}`}</div>
                                        <div className='font-light text-base my-auto'>{`(${treasuryBalanceUsd})`}</div>
                                    </div>
                                    {/* {treasuryBalances?.map((item) => (
                                        <li key={item.id} className="">
                                            {item.balance > 0 && getTokenBalanceString(item.balance, item.symbol)}
                                        </li>
                                    ))} */}
                                    <div className='text-xs opacity-70 w-40 mt-4'>Rewards are distributed based on NFT holdings of each trait.</div>
                                </div>
                            </div>

                            <div className='flex flex-col w-fit h-full justify-between'>
                                <div>
                                    <h1 className='uppercase font-heading font-bold text-xl'>NFT Revenue Share</h1>
                                    <TokenAddressInput handler={handleWalletChange} value={walletInput}></TokenAddressInput>
                                </div>
                                <div>
                                    <div className='opacity-70 text-sm'>Next payout: SEP 1, 2024</div>
                                    {/* <div className='text-xl w-64 text-ellipsis overflow-hidden'>{`${reward}`}</div> */}
                                    {walletInput.length > 0 && <div className='flex flex-col justify-end h-fit mt-1'>
                                        <div className='text-xl w-64 flex flex-row gap-2'>
                                            <div className='font-semibold text-lg mb-0 leading-6 mt-auto'>{`${reward}`}</div>
                                            {reward.length > 0 && <div className='font-light text-base mt-auto mb-0'>{`(${rewardUsd})`}</div>}
                                        </div>
                                    </div>}

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}