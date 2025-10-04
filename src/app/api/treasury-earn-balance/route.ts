import axios from "axios";
import { tokenABI } from "@/assets/tokenABI";
import { NextResponse } from "next/server";
import { createPublicClient, formatEther, http } from "viem";
import { mainnet } from "viem/chains";

// Force this route to be dynamic and not cached by ISR
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const TREASURY = "0x5981F9Ca05DD3A82073a0f8F1294ac4F52357521";
const EARN = "0x0b61c4f33bcdef83359ab97673cb5961c6435f4e";

const client = createPublicClient({
  chain: mainnet,
  transport: http(`${process.env.RPC_ETH}`),
});

async function getTreasuryEarnBalance() {
  const latestBlock = await client.getBlockNumber();
  // console.log(latestBlock);
  const data = await client.readContract({
    address: EARN as `0x${string}`,
    abi: tokenABI,
    functionName: "balanceOf",
    args: [TREASURY as `0x${string}`],
    blockNumber: latestBlock,
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

  const headers = {
    "Cache-Control": "no-store", // Disable caching
  };

  // const price = 1;
  return NextResponse.json(treasuryBalance, { status: 200, headers });
}
