import ProfileDetail from "@/components/Registry/ProfileDetail";
import { TProfileDetails } from "@/components/Registry/types";

export default async function ProfileDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const profile: TProfileDetails = {
    id: "0x2b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
    anchor: "0x3f15B8c6F9939879Cb030D6dd935348E57109637",
    name: "1000x Super Shiba Doge Moon Elon",
    chainId: 5,
    sender: "0xa671616e3580D3611139834Cd34D7838e82A04cD",
    metadata: {
      protocol: 1,
      pointer: "bafkreigwiljyskihuaeyjsedoei3taprwbbheldxig25lhoqvw2kpcf4bu",
    },
    nonce: 1337,
    owner: "0xa671616e3580D3611139834Cd34D7838e82A04cD",
    members: [
      "0xa71864fAd36439C50924359ECfF23Bb185FFDf21",
      "0x3f15B8c6F9939879Cb030D6dd935348E57109637",
    ],
    adminRoleId:
      "0x2b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
    memberRoleId:
      "0x2b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
  };

  const response = await fetch(
    `https://ipfs.io/ipfs/${profile.metadata.pointer}`,
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
