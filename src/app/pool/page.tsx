import { Loading } from "@/components/Loading";
import Pool from "@/components/Pool/Pool";
import { getPoolDataQuery, graphqlEndpoint } from "@/utils/query";
import { request } from "graphql-request";
import { Suspense } from "react";

export default async function PoolHome() {
  // FIXME: THE API DOES NOT RETURN THE STATUS

  const data: any = await request(graphqlEndpoint, getPoolDataQuery);
  const { pools } = data;

  return (
    <Suspense fallback={<Loading />}>
      <Pool
        data={pools}
        header={"Pools"}
        description={
          "A list of all the pools in the registry on all supported networks"
        }
      />
    </Suspense>
  );
}
1;
