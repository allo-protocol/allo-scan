export type TPoolDetail = {
  poolId: number;
  chainId: number;
  strategy: string;
  token: string;
  amount: number;
  profile: {
    name: string;
    owner: string;
  };
  metadata: {
    protocol: number;
    pointer: string;
  };
  creator: string;
};
