import { Network, NetworkOption, Slugs, Contract } from "@/types/types";

export const getNetworkOptions = (): NetworkOption[] => {
  return [
    {
      id: "5",
      name: "Goerli",
      slug: Slugs.GOERLI,
    },
    {
      id: "420",
      name: "Optimism Goerli",
      slug: Slugs.OPTIMISM_GOERLI,
    },
    {
      id: "42069",
      name: "Sepolia",
      slug: Slugs.SEPOLIA,
    },
    {
      id: "58008",
      name: "PGN Sepolia",
      slug: Slugs.PGN_SEPOLIA,
    },
    {
      id: "44787",
      name: "Celo Alfajores",
      slug: Slugs.CELO_ALFAJORES,
    },
  ];
};

const coreContracts = [
  {
    id: "registryImplementation",
    name: "Registry Implementation",
    address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
  },
  {
    id: "registryProxy",
    name: "Registry Proxy",
    address: "0x0000000000000000000000000000000000000000",
  },
  {
    id: "alloImplementation",
    name: "Allo Implementation",
    address: "0x8dde1922d5f772890f169714faceef9551791caf",
  },
  {
    id: "alloProxy",
    name: "Allo Proxy",
    address: "0x79536CC062EE8FAFA7A19a5fa07783BD7F792206",
  },
];

const strategyContracts = [
  {
    id: "donationVotingMerkleDistribution",
    name: "Donation Voting Merkle Distribution",
    address: "0xC88612a4541A28c221F3d03b6Cf326dCFC557C4E",
  },
  {
    id: "directGrantsSimple",
    name: "Direct Grants Simple",
    address: "0xf243619f931c81617EE00bAAA5c5d97aCcC5af10",
  },
];

export const getAllContracts = (): { core: Network[]; strategy: Network[] } => {
  return {
    core: getCoreContracts(),
    strategy: getStrategyContracts(),
  };
};

// goerli, optimism-goerli, sepolia, pgn-sepolia, celo-alfajores
export const getCoreContracts = (): Network[] => {
  return [
    {
      id: "5",
      slug: Slugs.GOERLI,
      name: "Goerli",
      explorer: "https://goerli.etherscan.io/",
      coreContracts: coreContracts,
    },
    {
      id: "420",
      slug: Slugs.OPTIMISM_GOERLI,
      name: "Optimism Goerli",
      explorer: "https://goerli-optimism.etherscan.io/",
      coreContracts: coreContracts,
    },
    {
      id: "42069",
      slug: Slugs.SEPOLIA,
      name: "Sepolia",
      explorer: "https://sepolia.etherscan.io/",
      coreContracts: coreContracts,
    },
    {
      id: "58008",
      slug: Slugs.PGN_SEPOLIA,
      name: "PGN Sepolia",
      explorer: "https://explorer.sepolia.publicgoods.network/",
      coreContracts: coreContracts,
    },
    {
      id: "44787",
      slug: Slugs.CELO_ALFAJORES,
      name: "Celo Alfajores",
      explorer: "https://explorer.celo.org/alfajores/",
      coreContracts: coreContracts,
    },
  ];
};

export const getStrategyContracts = (): Network[] => {
  return [
    {
      id: "5",
      slug: Slugs.GOERLI,
      name: "Goerli",
      explorer: "https://goerli.etherscan.io/",
      strategyContracts: strategyContracts,
    },
    {
      id: "420",
      slug: Slugs.OPTIMISM_GOERLI,
      name: "Optimism Goerli",
      explorer: "https://goerli-optimism.etherscan.io/",
      strategyContracts: strategyContracts,
    },
    {
      id: "42069",
      slug: Slugs.SEPOLIA,
      name: "Sepolia",
      explorer: "https://sepolia.etherscan.io/",
      strategyContracts: strategyContracts,
    },
    {
      id: "58008",
      slug: Slugs.PGN_SEPOLIA,
      name: "PGN Sepolia",
      explorer: "https://explorer.sepolia.publicgoods.network/",
      strategyContracts: strategyContracts,
    },
    {
      id: "44787",
      slug: Slugs.CELO_ALFAJORES,
      name: "Celo Alfajores",
      explorer: "https://explorer.celo.org/alfajores/",
      strategyContracts: strategyContracts,
    },
  ];
};
