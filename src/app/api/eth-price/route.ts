import { NextResponse } from "next/server";
import axios from "axios";

// Force this route to be dynamic and not cached by ISR
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const ETH_ID = 1027;

async function getTokenPrice(coinId: number) {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY, // Replace with your CoinMarketCap API key
          ["Content-Type"]: "application/json",
        },
        params: {
          id: coinId, // Change to the token symbol you want
        },
      }
    );

    // success
    const json = response.data.data[coinId.toString()];
    console.log(json.quote.USD.price);
    return json.quote.USD.price;
  } catch (ex) {
    // error
    console.log(ex);
    return undefined;
  }
}

export async function GET() {
  const price = await getTokenPrice(ETH_ID);
  // const price = 1;

  const headers = {
    "Cache-Control": "no-store", // Disable caching
  };

  return NextResponse.json(price, { status: 200, headers });
}
