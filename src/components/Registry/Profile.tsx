// import { ProfileContext } from "@/Context/ProfileContext";
// import { useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Address, convertBytesToShortString } from "../Address";
import { getNetworks } from "@/api/networks";
import Table from "../Table";
import { TTableData } from "@/types/types";
import { convertChainIdToNetworkName } from "@/utils";

const ProfileContent = () => {
  // Test data for UI development
  const profileTestData: TProfile[] = [
    {
      id: "0x2b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
      anchor: "0x3f15B8c6F9939879Cb030D6dd935348E57109637",
      name: "Developer Profile",
      chainId: 5,
      sender: "0xa671616e3580D3611139834Cd34D7838e82A04cD",
    },
    {
      id: "0x3b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
      anchor: "0x4f15B8c6F9939879Cb030D6dd935348E57109637",
      name: "Developer Profile",
      chainId: 42069,
      sender: "0xa671616e3580D3611139834Cd34D7838e82A04cD",
    },
    {
      id: "0x4b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
      anchor: "0x5f15B8c6F9939879Cb030D6dd935348E57109637",
      name: "Developer Profile",
      chainId: 58008,
      sender: "0xa671616e3580D3611139834Cd34D7838e82A04cD",
    },
  ];

  // TODO: replace with useContext hook when we move to live data
  const profiles = profileTestData;
  // const { profiles } = useContext(ProfileContext);

  const tableData: TTableData = {
    name: "Profiles",
    description: "A list of all the profiles in the registry on all supported networks",
    headers: ["ID", "Anchor", "Name", "Sender", "Network"],
    rows: profiles.map((profile) => {
      return [
        convertBytesToShortString(profile.id),
        <Address address={profile.anchor} chainId={profile.chainId} />,
        profile.name,
        <Address address={profile.sender} chainId={profile.chainId} />,
        convertChainIdToNetworkName(profile.chainId),
      ];
    }
    )
  }

  return <Table data={tableData} />;
};

export default ProfileContent;
