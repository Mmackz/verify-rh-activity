import fs from "fs/promises";
import { getAddress } from "viem";

export async function verifyV2Activity(address) {
   try {
      const data = await fs.readFile("utils/v2QuestData.json", "utf8");
      const questData = JSON.parse(data);
      const checkSummedAddress = getAddress(address);
      if (checkSummedAddress) {
         console.log(`Has done ${questData[checkSummedAddress]} quests on rabbithole v2`);
      } else {
         console.log("No rabbithole v2 activity found");
      }
   } catch (err) {
      console.error("Error reading file from disk:", err);
   }
}
