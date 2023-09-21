import ProfileDetail from "@/components/Registry/ProfileDetail";
import { TProfileDetails } from "@/components/Registry/types";
import { getProfileDetailDataQuery } from "@/utils/query";
import { graphqlEndpoint } from "@/utils/utils";
import request from "graphql-request";

export default async function ProfileDetailPage({
  params,
}: {
  params: { id: string, chain: number };
}) {
//   const profile: TProfileDetails = {
//     profileId:
//       "0x2b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
//     anchor: "0x3f15B8c6F9939879Cb030D6dd935348E57109637",
//     name: "1000x Super Shiba Doge Moon Elon",
//     chainId: params.chain,
//     creator: "0xa671616e3580D3611139834Cd34D7838e82A04cD",
//     metadataProtocol: 1,
//     metadataPointer: "bafkreigwiljyskihuaeyjsedoei3taprwbbheldxig25lhoqvw2kpcf4bu",
    
//     nonce: 1337,
//     owner: "0xa671616e3580D3611139834Cd34D7838e82A04cD",
//  };

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

  // Check if the response status is OK (200)
  if (response.ok) {
    metadata = await response.text();
  }

  return (
    <div>
      <ProfileDetail profile={profile} metadata={metadata} />
    </div>
  );
}
