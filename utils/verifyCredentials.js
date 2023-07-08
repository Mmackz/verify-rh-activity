import { mainnetClient, optimismClient } from "../lib/client.js";
import { credentialAbi } from "../lib/abi.js";

export async function verifyCredentials(address) {
   try {
      const hasDaoCredential = await mainnetClient.readContract({
         address: "0xc9A42690912F6Bd134DBc4e2493158b3D72cAd21",
         abi: credentialAbi,
         functionName: "balanceOf",
         args: [address]
      });

      const hasDefiCredential = await mainnetClient.readContract({
         address: "0x2fAcE815247A997eAa29881C16F75FD83f4Df65b",
         abi: credentialAbi,
         functionName: "balanceOf",
         args: [address]
      });

      const hasNftCredential = await mainnetClient.readContract({
         address: "0xa3B61c077dA9Da080D22A4cE24f9Fd5f139634cA",
         abi: credentialAbi,
         functionName: "balanceOf",
         args: [address]
      });

      const hasL2Credential = await optimismClient.readContract({
         address: "0x94C1ff1951c38fC3DF189c8f4Edf01E3Bf4D1e5B",
         abi: credentialAbi,
         functionName: "balanceOf",
         args: [address]
      });

      if (hasDaoCredential) {
         console.log("Has Dao credential")
      }

      if (hasDefiCredential) {
         console.log("Has Defi credential")
      }

      if (hasNftCredential) {
         console.log("Has Nft credential")
      }

      if (hasL2Credential) {
         console.log("Has L2 credential");
      }
   } catch (error) {
      console.log(error);
      return "An error occurred while verifying credentials. Please try again later."
   }
}