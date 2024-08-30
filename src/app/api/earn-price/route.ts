import axios from "axios";
import { tokenABI } from "@/assets/tokenABI";
import { NextResponse } from "next/server";
import { createPublicClient, formatEther, http } from "viem";
import { mainnet } from "viem/chains";

const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const EARN = "0x0b61c4f33bcdef83359ab97673cb5961c6435f4e";

const client = createPublicClient({
  chain: mainnet,
  transport: http(
    `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  ),
});

const ETH_ID = 1027;

async function getETHUSDPrice() {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_CMC_API_KEY, // Replace with your CoinMarketCap API key
          ["Content-Type"]: "application/json",
        },
        params: {
          id: ETH_ID, // Change to the token symbol you want
        },
      }
    );

    // success
    const json = response.data.data[ETH_ID.toString()];

    return json.quote.USD.price;
  } catch (ex) {
    // error
    console.log(ex);
    return undefined;
  }
}

async function getEARNETHPrice() {
  let ethPrice: number | undefined = undefined;
  const data = await client.multicall({
    contracts: [
      {
        address: WETH as `0x${string}`,
        abi: tokenABI,
        functionName: "balanceOf",
        args: ["0x32558f1214bd874c6cbc1ab545b28a18990ff7ee" as `0x${string}`],
      },
      {
        address: EARN as `0x${string}`,
        abi: tokenABI,
        functionName: "balanceOf",
        args: ["0x32558f1214bd874c6cbc1ab545b28a18990ff7ee" as `0x${string}`],
      },
    ],
  });

  if (data[0].status == "success" && data[1].status == "success") {
    const nativeBalance = Number(formatEther(data[0].result));
    const tokenBalance = Number(formatEther(data[1].result));
    if (tokenBalance > 0) {
      ethPrice = nativeBalance / tokenBalance;
    }
  }
  return ethPrice;
}

export async function GET() {
  const ethUsdPrice = await getETHUSDPrice();
  // console.log(ethUsdPrice);
  const earnEthPrice = await getEARNETHPrice();
  // console.log(earnEthPrice);

  let earnUsdPrice = 0;
  if (earnEthPrice !== undefined && ethUsdPrice !== undefined) {
    earnUsdPrice = earnEthPrice * ethUsdPrice;
  }

  // const price = 1;
  return NextResponse.json(earnUsdPrice, { status: 200 });
}
