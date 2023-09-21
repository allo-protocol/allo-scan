export type TProfile = {
  profileId: string;
  anchor: string;
  name: string;
  chainId: number;
  creator: string;
}

export type TProfileDetails = TProfile & {
  createdAt: string;
  pools: {
    poolId: string;
  }[];
  metadataPointer: string;
  metadataProtocol: number;
  nonce: number;
  owner: string;
  role: {
    roleAccounts: {
      accountId: string;
    }[];
  };
}