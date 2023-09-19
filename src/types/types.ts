export enum Slug {
  GOERLI = "goerli",
  OPTIMISM_GOERLI = "optimism-goerli",
  SEPOLIA = "sepolia",
  PGN_SEPOLIA = "pgn-sepolia",
  CELO_ALFAJORES = "celo-alfajores",
}

export interface IContract {
  name: string;
  address: string;
}
export interface ICoreContracts {
  registryImplementation: IContract;
  registryProxy: IContract;
  alloImplementation: IContract;
  alloProxy: IContract;
}

export interface IStrategyContracts {
  donationVotingMerklePaout: IContract;
  directGrantsSimple: IContract;
}

export interface INetwork {
  [key: number]: TNetworkData;
}

export type TNetworkData = {
  id: string;
  slug: Slug;
  name: string;
  explorer: string;
  coreContracts: ICoreContracts;
  strategyContracts: IStrategyContracts;
};

export type TTableData = {
  name: string;
  description: string;
  headers: string[];
  rows: any[][];
};

export type Metadata = {
  protocol: number;
  pointer: string;
}

export enum MetadataProtocol {
  "Undefined",
  "IPFS"
}