import fs from "fs/promises";

export async function writeToFile(userData) {
   const { credentials } = userData;
   const credentialsArr = [];
   for (const key in credentials) {
      if (credentials[key]) {
         credentialsArr.push(key.toUpperCase());
      }
   }
   if (credentialsArr.length === 0) {
      credentialsArr.push("None");
   }

   const output = `Address - ${userData.address}\nQuests Completed: ${
      userData.questsCompleted
   }\nAdventure Badge Level - ${
      userData.adventureBadgeLevel
   }\nCredentials - ${credentialsArr.join(
      ", "
   )}\n----------------------------------------------------------------\n`;
   await fs.appendFile("output.txt", output);
}
