import ProfileDetail from "@/components/Registry/ProfileDetail";
import {
  IProfileDetailResponse,
  TProfileDetail,
} from "@/components/Registry/types";
import { getProfileDetailDataQuery, graphqlEndpoint } from "@/utils/query";
import { fetchIpfsMetadata } from "@/utils/utils";
import request from "graphql-request";

export default async function ProfileDetailPage({
  params,
}: {
  params: { id: string; chain: number };
}) {
  const profileDetails: IProfileDetailResponse = await request(
    graphqlEndpoint,
    getProfileDetailDataQuery,
    {
      chainId: params.chain,
      profileId: params.id,
    }
  );

  const profile: TProfileDetail = profileDetails.profile;
  const metadataObj: Object = await fetchIpfsMetadata({
    pointer: profile.metadataPointer,
    protocol: profile.metadataProtocol,
  });

  return (
    <div>
      <ProfileDetail profile={profile} metadataObj={metadataObj}/>
    </div>
  );
}
