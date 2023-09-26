import PoolDetailPage from "@/components/Pool/PoolDetail";
import { IPoolDetailResponse, TPoolDetail } from "@/components/Pool/types";
import { getPoolDetailDataQuery, graphqlEndpoint } from "@/utils/query";
import { fetchIpfsMetadata } from "@/utils/utils";
import { request } from "graphql-request";

export default async function PoolDetail({
  params,
}: {
  params: { chain: string; id: string };
}) {
  const response: IPoolDetailResponse = await request(
    graphqlEndpoint,
    getPoolDetailDataQuery,
    {
      chainId: params.chain,
      poolId: params.id,
    }
  );

  const { pool }: { pool: TPoolDetail } = response;

    const metadataObj: Object = await fetchIpfsMetadata({
      pointer: pool.metadataPointer,
      protocol: pool.metadataProtocol,
    });

  return <PoolDetailPage pool={pool} metadataObj={metadataObj} />;
}
