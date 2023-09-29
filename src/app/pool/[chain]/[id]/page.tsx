import PoolDetailPage from "@/components/Pool/PoolDetail";
import {
  IPoolDetailResponse,
  Status,
  StrategyId,
  TPoolDetail,
  TRfpStrategy,
} from "@/components/Pool/types";
import { getPoolDetailDataQuery, graphqlEndpoint } from "@/utils/query";
import { fetchIpfsMetadata } from "@/utils/utils";
import { request } from "graphql-request";

export default async function PoolDetail({
  params,
}: {
  params: { chain: string; id: string };
}) {
  // ============ todo: replace dummy data with real data ============
  const rfpStrategyDetails: TRfpStrategy = {
    useRegistryAnchor: true,
    metadataRequired: true,
    acceptedRecipient: "0x1234567890123456789012345678901234567890",
    maxBid: 2000000000000000,
    upcomingMilsetoneId: 1,
    recipients: [
      {
        recipient: "0x1234567890123456789012345678901234567890",
        useRegistryAnchor: true,
        recipientAddress: "0x1234567890123456789012345678901234567890",
        proposalBid: 1000000000000000,
        recipientStatus: Status.Accepted,
      },
      {
        recipient: "0x1234567890123456789012345678901234567890",
        useRegistryAnchor: true,
        recipientAddress: "0x1234567890123456789012345678901234567890",
        proposalBid: 1000000000000000,
        recipientStatus: Status.Pending,
      },
    ],
    milestones: [
      {
        amountPercentage: 10,
        metadata: {
          protocol: 1,
          pointer:
            "bafkreigwiljyskihuaeyjsedoei3taprwbbheldxig25lhoqvw2kpcf4bu",
        },
        metadataObj: await fetchIpfsMetadata({
          protocol: 1,
          pointer:
            "bafkreigwiljyskihuaeyjsedoei3taprwbbheldxig25lhoqvw2kpcf4bu",
        }),
        milestoneStatus: Status.Pending,
      },
      {
        amountPercentage: 10,
        metadata: {
          protocol: 1,
          pointer:
            "bafkreigwiljyskihuaeyjsedoei3taprwbbheldxig25lhoqvw2kpcf4bu",
        },
        metadataObj: await fetchIpfsMetadata({
          protocol: 1,
          pointer:
            "bafkreigwiljyskihuaeyjsedoei3taprwbbheldxig25lhoqvw2kpcf4bu",
        }),
        milestoneStatus: Status.Pending,
      },
    ],
    distributions: [
      {
        acceptedRecipient: "0x1234567890123456789012345678901234567890",
        recipientAddress: "0x1234567890123456789012345678901234567890",
        amount: 1000000000000000,
        sender: "0x1234567890123456789012345678901234567890",
      },
      {
        acceptedRecipient: "0x1234567890123456789012345678901234567890",
        recipientAddress: "0x1234567890123456789012345678901234567890",
        amount: 1000000000000000,
        sender: "0x1234567890123456789012345678901234567890",
      },
    ],
    votes: [
      {
        voter: "0x1234567890123456789012345678901234567890",
        recipientId: "0x1234567890123456789012345678901234567890",
        timestamp: 1234567890,
      },
      {
        voter: "0x1234567890123456789012345678901234567890",
        recipientId: "0x1234567890123456789012345678901234567890",
        timestamp: 1234567890,
      },
    ],
  };

  const response: IPoolDetailResponse = await request(
    graphqlEndpoint,
    getPoolDetailDataQuery,
    {
      chainId: params.chain,
      poolId: params.id,
    },
  );

  const { pool }: { pool: TPoolDetail } = response;

  if (pool.poolId === "42")
    pool.strategyDetails = {
      strategyId: StrategyId.RFPCommittee,
      details: rfpStrategyDetails,
    };

  const metadataObj: Object = await fetchIpfsMetadata({
    pointer: pool.metadataPointer,
    protocol: pool.metadataProtocol,
  });

  return <PoolDetailPage pool={pool} metadataObj={metadataObj} />;
}
