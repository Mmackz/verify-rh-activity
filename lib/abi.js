export const adventureBadgeAbi = [
   {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "addressToTokenId",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function"
   }
];

export const credentialAbi = [
   {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   }
];
