export enum Slugs {
  GOERLI = "goerli",
  OPTIMISM_GOERLI = "optimism-goerli",
  SEPOLIA = "sepolia",
  PGN_SEPOLIA = "pgn-sepolia",
  CELO_ALFAJORES = "celo-alfajores",
}

export interface Contract {
  id: string;
  name: string;
  address: string;
}
// export interface CoreContract {
//   registryImplementation: Contract;
//   registryProxy: Contract;
//   alloImplementation: Contract;
//   alloProxy: Contract;
// }

// export interface StrategyContract {
//   donationVotingMerkleDistribution?: Contract;
//   directGrantsSimple: Contract;
// }

export interface Network {
  id: string;
  slug: Slugs;
  name: string;
  explorer: string;
  coreContracts?: Contract[];
  strategyContracts?: Contract[];
}

export interface NetworkOption {
  id: string;
  name: string;
  slug: Slugs;
}
