
import Image from 'next/image';

import { Alchemy, Network, Utils } from "alchemy-sdk";
import { NFT_CONTRACT } from '@/lib/metadata';
import { useEffect, useState } from 'react';
import TokenAddressInput from './tokenAddressInput';
import LinkButton from './buttons/linkButton';

const TREASURY_WALLET = "0x248518FCb021213a4c524e4acFc7Ce5CAB04d192";
const TREASURY_VALUE = 8586;

const TRAIT_MULTIPLIER: Record<string, number> = ({
    "GREEN": 0.00025316455,
    "BLUE": 0.002,
    "YELLOW": 0.0025,
    "RED": 0.01,
    "PURPLE": 0.02,
})

const alchemyConfig = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: Network.BASE_MAINNET,
};

const alchemy = new Alchemy(alchemyConfig);


type TokenInfo = {
    id: number;
    balance: number;
    symbol: string;
}


function getTokenBalanceString(amount: number, symbol: string) {
    const text = `${amount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}${String.fromCharCode(8239)} ${symbol}`
    return text;
}



export default function Nfts() {

    const [treasuryBalances, setTreasuryBalances] = useState<TokenInfo[]>();
    const [totalSupply, setTotalSupply] = useState<number>(0);
    const [reward, setReward] = useState<string>("");
    const [walletInput, setWallet] = useState('');

    useEffect(() => {
        async function getBalances() {

            let tokens: TokenInfo[] = [];
            const ethBalance = Utils.formatEther(await alchemy.core.getBalance(TREASURY_WALLET));

            tokens.push({
                id: 0,
                balance: Number(ethBalance),
                symbol: "ETH"
            })

            const balances = await alchemy.core.getTokenBalances(TREASURY_WALLET, ["0x803b629c339941e2b77d2dc499dac9e1fd9eac66"]);

            for (let i = 0; i < balances["tokenBalances"].length; i++) {
                const token = balances["tokenBalances"][i];
                const info = await alchemy.core.getTokenMetadata(token.contractAddress);
                if (info.decimals && info.symbol && token.tokenBalance) {
                    tokens.push({
                        id: i = 1,
                        balance: Number(Utils.formatUnits(token.tokenBalance, info.decimals)),
                        symbol: info.symbol
                    })
                }
            }
            setTreasuryBalances(tokens);
        }
        getBalances();
    }, [])

    useEffect(() => {
        async function getTotalSupply() {
            let tx = {
                to: NFT_CONTRACT,
                data: "0x18160ddd7f15c72528c2f94fd8dfe3c8d5aa26e2c50c7d81f4bc7bee8d4b7932",
            }
            let response = await alchemy.core.call(tx);
            if (response) {
                setTotalSupply(Number(Utils.hexValue(response)));
            }
        }
        getTotalSupply();
    }, [])

    const handleWalletChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setWallet(value);

        if (value.slice(0, 2) == "0x" && value.length == 42) {
            let options = {
                contractAddresses: [NFT_CONTRACT]
            };
            const nfts = await alchemy.nft.getNftsForOwner(value, options);
            let sum: number = 0;
            for (let i = 0; i < nfts.ownedNfts.length; i++) {
                const nft = nfts.ownedNfts[i];
                const trait: string = nft.raw.metadata.attributes[0].value;
                sum += TRAIT_MULTIPLIER[trait] * TREASURY_VALUE;
            }
            sum /= 4;
            setReward(getTokenBalanceString(sum, 'USD'));
        }
        else {
            setReward(getTokenBalanceString(0, 'USD'))
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
                            Touch Grassy NFT holders receive monthly revenue share from 1/4 of the Touch Grass treasury balance.
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
                                    <div className='font-semibold text-lg'>{getTokenBalanceString(TREASURY_VALUE, "USD")}</div>
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
                                    <div className='text-xl w-64 text-ellipsis overflow-hidden'>{`${reward}`}</div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}