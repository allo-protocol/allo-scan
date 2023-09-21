import PoolDetailPage from "@/components/Pool/PoolDetail";
import { TPoolDetail } from "@/components/Pool/types";
import { getPoolDetailDataQuery, graphqlEndpoint } from "@/utils/query";
import { request } from "graphql-request";

export default async function PoolDetail({
  params,
}: {
  params: { chain: string; id: string };
}) {
  const poolDetails: any = await request(
    graphqlEndpoint,
    getPoolDetailDataQuery,
    {
      chainId: params.chain,
      poolId: params.id,
    }
  );

  const { pool }: { pool: TPoolDetail } = poolDetails;

  let poolMetadata = "{}";

  try {
    const response = await fetch(
      `https://ipfs.io/ipfs/${pool.metadataPointer}`
    );

    // Check if the response status is OK (200)
    if (response.ok) {
      poolMetadata = await response.text();
    }
  } catch (error) {
    console.log(error);
  }

  return <PoolDetailPage pool={pool} poolMetadata={poolMetadata} />;
}
