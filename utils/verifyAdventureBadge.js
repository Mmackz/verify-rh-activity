import { polygonClient } from "../lib/client.js";
import { adventureBadgeAbi } from "../lib/abi.js";

export async function verifyAdventureBadge(address) {
   try {
      const badgeLevel = await polygonClient.readContract({
         address: "0xaC4255eC6885E50352A1957062ac418c2CC94e27",
         abi: adventureBadgeAbi,
         functionName: "addressToTokenId",
         args: [address]
      });

      if (badgeLevel === 0n) {
         return "Not eligible for adventure badge";
      }

      return `Has Adventure Badge Level ${badgeLevel}`;
   } catch (error) {
      console.log(error);
      return "An error occured while verifying adventure badges. Please try again later.";
   }
}
