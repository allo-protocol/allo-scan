import { Loading } from "@/components/Loading";
import Pool from "@/components/Pool/Pool";
import { getPoolDataQuery } from "@/utils/query";
import { graphqlEndpoint } from "@/utils/utils";
import { request } from "graphql-request";
import { Suspense } from "react";

export default async function PoolHome() {
  // FIXME: THE API DOES NOT RETURN THE POOL NAME AND STATUS

  const data: any = await request(graphqlEndpoint, getPoolDataQuery);
  const { pools } = data;

  return (
    <Suspense fallback={<Loading />}>
      <Pool data={pools} />
    </Suspense>
  );
}
1