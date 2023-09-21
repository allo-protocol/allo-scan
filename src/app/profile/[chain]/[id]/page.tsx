import ProfileDetail from "@/components/Registry/ProfileDetail";
import { TProfileDetails } from "@/components/Registry/types";
import { getProfileDetailDataQuery, graphqlEndpoint } from "@/utils/query";
import request from "graphql-request";

export default async function ProfileDetailPage({
  params,
}: {
  params: { id: string, chain: number };
}) {
   const profileDetails: any = await request(
     graphqlEndpoint,
     getProfileDetailDataQuery,
     {
       chainId: params.chain,
       profileId: params.id,
     },
   );

   const profile: TProfileDetails = profileDetails.profile;

  const response = await fetch(
    `https://ipfs.io/ipfs/${profile.metadataPointer}`,
  );

  let metadata = "";

  if (response.ok) {
    metadata = await response.text();
  }

  return (
    <div>
      <ProfileDetail profile={profile} metadata={metadata} />
    </div>
  );
}
