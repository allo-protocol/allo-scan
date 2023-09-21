export type TProfile = {
  profileId: string;
  anchor: string;
  name: string;
  chainId: number;
  creator: string;
};

export type TProfileDetail = TProfile & {
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
};

export interface IProfileResponse {
  profiles: TProfileDetail[];
}

export interface IProfileDetailResponse {
  profile: TProfileDetail;
}
