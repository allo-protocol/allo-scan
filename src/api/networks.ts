import { Contracts, Network, Slugs } from "@/types/types";

const contracts: Contracts = {
  registryImplementation: {
    name: "Registry Implementation",
    address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
  },
  registryProxy: {
    name: "Registry Proxy",
    address: "0x0000000000000000000000000000000000000000",
  },
  alloImplementation: {
    name: "Allo Implementation",
    address: "0x8dde1922d5f772890f169714faceef9551791caf",
  },
  alloProxy: {
    name: "Allo Proxy",
    address: "0x79536CC062EE8FAFA7A19a5fa07783BD7F792206",
  },
};

// goerli, optimism-goerli, sepolia, pgn-sepolia, celo-alfajores
export const getNetworks = (): Network[] => {
  return [
    {
      id: "5",
      slug: Slugs.GOERLI,
      name: "Goerli",
      explorer: "https://goerli.etherscan.io/",
      contracts: contracts,
    },
    {
      id: "420",
      slug: Slugs.OPTIMISM_GOERLI,
      name: "Optimism Goerli",
      explorer: "https://goerli-optimism.etherscan.io/",
      contracts: contracts,
    },
    {
      id: "42069",
      slug: Slugs.SEPOLIA,
      name: "Sepolia",
      explorer: "https://sepolia.etherscan.io/",
      contracts: contracts,
    },
    {
      id: "58008",
      slug: Slugs.PGN_SEPOLIA,
      name: "PGN Sepolia",
      explorer: "https://explorer.sepolia.publicgoods.network/",
      contracts: contracts,
    },
    {
      id: "44787",
      slug: Slugs.CELO_ALFAJORES,
      name: "Celo Alfajores",
      explorer: "https://explorer.celo.org/alfajores/",
      contracts: contracts,
    },
  ];
};
