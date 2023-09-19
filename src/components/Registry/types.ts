import { Metadata } from "@/types/types";

export type TProfile = {
  id: string;
  anchor: string;
  name: string;
  chainId: number;
  sender: string;
}

export type TProfileDetails = TProfile & {
  metadata: Metadata;
  nonce: number;
  owner: string;
  members: string[];
  adminRoleId: string;
  memberRoleId: string;
}