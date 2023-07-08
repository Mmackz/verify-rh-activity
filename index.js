import { verifyAdventureBadge } from "./utils/verifyAdventureBadge.js";

async function verifyAddress(address) {
   console.log(await verifyAdventureBadge(address));
}

verifyAddress("0xa99f898530df1514a566f1a6562d62809e99557d");
