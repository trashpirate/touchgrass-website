import { NextResponse, NextRequest } from "next/server";
import { NFT_CONTRACT } from "@/lib/metadata";

import { Alchemy, Network, Utils } from "alchemy-sdk";

const TRAIT_MULTIPLIER: Record<string, number> = {
  GREEN: 0.00025316455,
  BLUE: 0.002,
  YELLOW: 0.0025,
  RED: 0.01,
  PURPLE: 0.02,
};

const alchemyConfig = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.BASE_MAINNET,
};

const alchemy = new Alchemy(alchemyConfig);

async function getNftMultiplier(wallet: string) {
  let options = {
    contractAddresses: [NFT_CONTRACT],
  };
  const nfts = await alchemy.nft.getNftsForOwner(wallet, options);
  let sum: number = 0;
  for (let i = 0; i < nfts.ownedNfts.length; i++) {
    const nft = nfts.ownedNfts[i];
    const trait: string = nft.raw.metadata.attributes[0].value;
    sum += TRAIT_MULTIPLIER[trait];
  }
  sum /= 4;
  return sum;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get("wallet");

  let multiplier = 0;
  if (param !== null) {
    multiplier = await getNftMultiplier(param);
  }

  const headers = {
    "Cache-Control": "no-store", // Disable caching
  };

  return NextResponse.json(multiplier, { status: 200, headers });
}
