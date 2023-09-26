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
  "RFP",
  "QV",
  "DonationVoting",
}

// ==================== RFP ====================

export type TRfpRecipient = {
  recipient: string;
  useRegistryAnchor: boolean;
  recipientAddress: string;
  proposalBid: number;
  recipientStatus: Status;
}

export type TRfpMilestone = {
  amountPercentage: number;
  metadata: Metadata;
  metadataObj: Object;
  milestoneStatus: Status;
}
  
export type TRfpDistribution = {
  acceptedRecipient: string;
  recipientAddress: string;
  amount: number;
  sender: string;
}
export type TRfpStrategy = {
  useRegistryAnchor: boolean;
  metadataRequired: boolean;
  acceptedRecipient: string;
  maxBid: number;
  upcomingMilsetoneId: number;
  recipients: TRfpRecipient[];
  milestones: TRfpMilestone[];
  distributions: TRfpDistribution[];
}
