import { Metadata } from "@/types/types";

export type TProfile = {
  profileId: string;
  anchor: string;
  name: string;
  chainId: number;
  creator: string;
}

export type TProfileDetails = TProfile & {
  metadata: Metadata;
  nonce: number;
  owner: string;
  members: string[];
  adminRoleId: string;
  memberRoleId: string;
}