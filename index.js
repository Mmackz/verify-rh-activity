import { verifyAdventureBadge } from "./utils/verifyAdventureBadge.js";
import { verifyCredentials } from "./utils/verifyCredentials.js";

async function verifyAddress(address) {
   console.log(await verifyAdventureBadge(address));
   await verifyCredentials(address);
}

verifyAddress("0xa99f898530df1514a566f1a6562d62809e99557d");
