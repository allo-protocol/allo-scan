import Pool from "@/components/Pool/Pool";
import { request, gql } from "graphql-request";

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
  const data: any = await request("http://localhost:5555/graphql", query);
  const { pools } = data;

  return <Pool data={pools}/>;
}
