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

      return Number(badgeLevel);
   } catch (error) {
      console.log(error);
      return null;
   }
}
