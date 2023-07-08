import { getAddresses } from "./lib/readFile.js";
import { verifyAddress } from "./utils/verifyAddress.js";

const addresses = await getAddresses();

for (const address of addresses) {
   await verifyAddress(address);
};