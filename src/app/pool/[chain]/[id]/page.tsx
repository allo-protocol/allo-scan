import PoolDetailPage from "@/components/Pool/PoolDetail";
import { TPoolDetail } from "@/components/Pool/types";
import { getPoolDetailDataQuery } from "@/utils/query";
import { graphqlEndpoint } from "@/utils/utils";
import { request } from "graphql-request";

export default async function PoolDetail({
  params,
}: {
  params: { chain: string; id: string };
}) {
  const poolDetails: TPoolDetail = await request(
    graphqlEndpoint,
    getPoolDetailDataQuery,
    {
      chainId: params.chain,
      poolId: params.id,
    }
  );

  console.log("Details", poolDetails);
  let poolMetadata = "{}";

  try {
    const response = await fetch(
      `https://ipfs.io/ipfs/${poolDetails.metadataPointer}`,
      { next: { revalidate: 300 } }
    );

    // Check if the response status is OK (200)
    if (response.ok) {
      poolMetadata = await response.text();
    }
  } catch (error) {
    console.log(error);
  }

  return <PoolDetailPage pool={poolDetails} poolMetadata={poolMetadata} />;
}
