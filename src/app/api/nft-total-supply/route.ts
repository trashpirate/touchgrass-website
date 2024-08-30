import { NextResponse } from "next/server";
import { createPublicClient, formatEther, http } from "viem";
import { mainnet } from "viem/chains";
import { NFT_CONTRACT } from "@/lib/metadata";
import { nftABI } from "@/assets/nftABI";

const client = createPublicClient({
  chain: mainnet,
  transport: http(
    `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  ),
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

  return NextResponse.json(totalSupply, { status: 200 });
}
