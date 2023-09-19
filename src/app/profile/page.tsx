import { Loading } from "@/components/Loading";
import Profile from "@/components/Registry/Profile";
import { graphqlEndpoint } from "@/utils/utils";
import { request, gql } from "graphql-request";
import { Suspense } from "react";

export default async function ProfileHome() {
  const query = gql`
    {
      profiles {
        profileId
        anchor
        name
        chainId
        creator
      }
    }
  `;
  const data: any = await request(graphqlEndpoint, query);
  const { profiles } = data;

  return (
    <Suspense fallback={<Loading />}>
      <Profile data={profiles} />
    </Suspense>
  );
}
