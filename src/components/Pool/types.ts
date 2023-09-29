import { Metadata } from "@/types/types";
import { TProfile } from "../Registry/types";

export type TPool = {
  poolId: string;
  chainId: string;
  amount: number;
  metadataPointer: string;
  metadataProtocol: number;
  strategy: string;
  token: string;
};

export type TPoolDetail = TPool & {
  profile: TProfile;
  tokenMetadata: TTokenMetadata;
  updatedAt: string;
  createdAt: string;
  strategyDetails?: {
    strategyId: StrategyId;
    details: TRfpStrategy;
  };
};

export type TTokenMetadata = {
  name: string;
  symbol: string;
  decimals: number;
};

export interface IPoolsResponse {
  pools: TPoolDetail[];
}

export interface IPoolDetailResponse {
  pool: TPoolDetail;
}

export enum Status {
  "None",
  "Pending",
  "Accepted",
  "Rejected",
  "Appealed",
  "Cancelled",
}

export enum StrategyId {
  "None",
  RFPSimple = "0xb87f34c0968bd74d43a6a5b72831a5ea733a4783a026b9fc9b1d17adf51214d2",
  RFPCommittee = "0x414f2ea9b91b8ee2e35a380fa0af0e14079832cc93530a61a4893b3dbf0a9aba",
  QVSimple = "0xed28ce0387d1786c1a38404047e9eecc4d1dcaeff695b867e912483e36c3d770",
  DonationVotingMerkleDistributionDirectTransfer = "0xc5263e972c91d7ff40708bc71239a2b6cbc8768704e210ca3069e2e11fc195df",
  DonationVotingMerkleDistributionVault = "0xecc48557f4826bd1181a4495232d6d07f248ef9cc0a650e64520f6c9f7458a8c",
}

// ==================== RFP ====================

export type TRfpRecipient = {
  recipient: string;
  useRegistryAnchor: boolean;
  recipientAddress: string;
  proposalBid: number;
  recipientStatus: Status;
};

export type TRfpMilestone = {
  amountPercentage: number;
  metadata: Metadata;
  metadataObj: Object;
  milestoneStatus: Status;
};

export type TRfpDistribution = {
  acceptedRecipient: string;
  recipientAddress: string;
  amount: number;
  sender: string;
};

export type RfpVote = {
  voter: string;
  recipientId: string;
  timestamp: number;
};

export type TRfpStrategy = {
  useRegistryAnchor: boolean;
  metadataRequired: boolean;
  acceptedRecipient: string;
  maxBid: number;
  upcomingMilsetoneId: number;
  recipients: TRfpRecipient[];
  milestones: TRfpMilestone[];
  distributions: TRfpDistribution[];
  votes: RfpVote[];
};
