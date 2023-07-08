import { writeToFile } from "../lib/writefile.js";
import { verifyAdventureBadge } from "./verifyAdventureBadge.js";
import { verifyCredentials } from "./verifyCredentials.js";
import { verifyV2Activity } from "./verifyV2Activity.js";

export async function verifyAddress(address) {
   const badgeLevel = await verifyAdventureBadge(address);
   const credentials = await verifyCredentials(address);
   const v2QuestsComplete = await verifyV2Activity(address);

   const userData = {
      address,
      questsCompleted: v2QuestsComplete,
      adventureBadgeLevel: badgeLevel,
      credentials
   };
   await writeToFile(userData);
}
