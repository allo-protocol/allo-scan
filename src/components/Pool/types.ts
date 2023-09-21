export type TPoolDetail = {
  poolId: string;
  chainId: string;
  strategy: string;
  token: string;
  tokenMetadata: {
    name: string | null;
    symbol: string | null;
    decimals: number | null;
  }
  amount: string;
  metadataProtocol: number;
  metadataPointer: string;
  profile: {
    profileId: string;
    name: string;
    owner: string;
    anchor: string;
    creator: string;
  };
  metadata: {
    protocol: number;
    pointer: string;
  };
};
