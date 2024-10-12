import { NextResponse } from "next/server";
import { createPublicClient, formatEther, http } from "viem";
import { base } from "viem/chains";
import { NFT_CONTRACT } from "@/lib/metadata";
import { nftABI } from "@/assets/nftABI";

const client = createPublicClient({
  chain: base,
  transport: http(`${process.env.NEXT_PUBLIC_RPC_BASE}`),
});

async function getTotalSupply() {
  const data = await client.readContract({
    address: NFT_CONTRACT as `0x${string}`,
    abi: nftABI,
    functionName: "totalSupply",
  });

  let totalSupply = 0;
  if (data !== undefined) {
    totalSupply = Number(data);
  }
  return totalSupply;
}

export async function GET() {
  const totalSupply = await getTotalSupply();

  const headers = {
    "Cache-Control": "no-store", // Disable caching
  };

  return NextResponse.json(totalSupply, { status: 200, headers });
}
