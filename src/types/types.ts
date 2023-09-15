export enum Slug {
  GOERLI = "goerli",
  OPTIMISM_GOERLI = "optimism-goerli",
  SEPOLIA = "sepolia",
  PGN_SEPOLIA = "pgn-sepolia",
  CELO_ALFAJORES = "celo-alfajores",
}

export enum Tabs {
  OVERVIEW = "Overview",
  PROFILE = "Profiles",
  POOL = "Pools",
}

export interface Contract {
  name: string;
  address: string;
}
export interface Contracts {
  registryImplementation: Contract;
  registryProxy: Contract;
  alloImplementation: Contract;
  alloProxy: Contract;
}

export interface Network {
  [key: number]: NetworkData;
}

export type NetworkData = {
  id: string;
  slug: Slug;
  name: string;
  explorer: string;
  contracts: Contracts;
}
