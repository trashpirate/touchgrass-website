import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { base } from "wagmi/chains";

export const wagmiConfig = createConfig({
    // Your dApps chains
    chains: [base],
    transports: {
        // RPC URL for each chain
        [base.id]: http(
            `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
        ),
    },
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
})