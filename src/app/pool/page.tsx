import { Loading } from "@/components/Loading";
import Pool from "@/components/Pool/Pool";
import { graphqlEndpoint } from "@/utils/utils";
import { request, gql } from "graphql-request";
import { Suspense } from "react";

export default async function PoolHome() {
  // FIXME: THE API DOES NOT RETURN THE POOL NAME AND STATUS
  const query = gql`
    {
      pools {
        poolId
        chainId
        strategy
        token
        amount
        profile {
          owner
          metadataPointer
        }
      }
    }
  `;
  const data: any = await request(graphqlEndpoint, query);
  const { pools } = data;

  return (
    <Suspense fallback={<Loading />}>
      <Pool data={pools} />
    </Suspense>
  );
}
