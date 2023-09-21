export type TPoolDetail = {
  amount: number;
  chainId: string;
  metadataPointer: string;
  metadataProtocol: number;
  poolId: string;
  profile: {
    profileId: string;
    anchor: string;
    creator: string;
    name: string;
    owner: string;
  };
  strategy: string;
  token: string;
  tokenMetadata: {
    name: string;
    symbol: string;
    decimals: number;
  };
};

export interface IPoolsResponse {
  pools: TPoolDetail[];
}

export interface IPoolDetailResponse {
  pool: TPoolDetail;
}
