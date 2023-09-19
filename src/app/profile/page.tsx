import { Loading } from "@/components/Loading";
import Profile from "@/components/Registry/Profile";
import { getProfileDataQuery } from "@/utils/query";
import { graphqlEndpoint } from "@/utils/utils";
import { request } from "graphql-request";
import { Suspense } from "react";

export default async function ProfileHome() {
  
  const data: any = await request(graphqlEndpoint, getProfileDataQuery);
  const { profiles } = data;

  return (
    <Suspense fallback={<Loading />}>
      <Profile data={profiles} />
    </Suspense>
  );
}
