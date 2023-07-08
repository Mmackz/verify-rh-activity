import { createPublicClient, http } from "viem";
import { mainnet, polygon, optimism } from "viem/chains";
import dotenv from "dotenv";

// config environment variables
dotenv.config();

export const mainnetClient = createPublicClient({
   chain: mainnet,
   transport: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`)
});

export const polygonClient = createPublicClient({
   chain: polygon,
   transport: http(`https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`)
});

export const OptimismClient = createPublicClient({
   chain: optimism,
   transport: http(`https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`)
});
