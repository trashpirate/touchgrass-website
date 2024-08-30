import axios from "axios";
import { tokenABI } from "@/assets/tokenABI";
import { NextResponse } from "next/server";
import { createPublicClient, formatEther, http } from "viem";
import { mainnet } from "viem/chains";

const TREASURY = "0x5981F9Ca05DD3A82073a0f8F1294ac4F52357521";
const EARN = "0x0b61c4f33bcdef83359ab97673cb5961c6435f4e";

const client = createPublicClient({
  chain: mainnet,
  transport: http(
    `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  ),
});

async function getTreasuryEarnBalance() {
  let ethPrice: number | undefined = undefined;
  const data = await client.readContract({
    address: EARN as `0x${string}`,
    abi: tokenABI,
    functionName: "balanceOf",
    args: [TREASURY as `0x${string}`],
  });

  let balance = 0;
  if (data !== undefined) {
    balance = Number(formatEther(data));
  }
  return balance;
}

export async function GET() {
  const treasuryBalance = await getTreasuryEarnBalance();
  // console.log(treasuryBalance);

  // const price = 1;
  return NextResponse.json(treasuryBalance, { status: 200 });
}