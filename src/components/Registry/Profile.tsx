// import { ProfileContext } from "@/Context/ProfileContext";
// import { useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Address, convertBytesToShortString } from "../Address";
import { getNetworks } from "@/api/networks";

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

  return <ProfileTable profiles={profiles} />;
};

const ProfileTable = (props: { profiles: TProfile[] }) => {
  const networks = getNetworks();

  const convertChainIdToNetworkName = (chainId: number) => {
    return `${networks[chainId].name} (${chainId})`;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-2">
      <div className="sm:flex flex flex-col items-center">
        <div className="sm:flex-auto flex-auto">
          <h1 className="text-center text-base font-semibold leading-6 text-gray-900">
            Profiles
          </h1>
          <p className="mt-2 text-center text-sm text-gray-700">
            A list of all the profiles in the registry on all supported networks
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:border lg:rounded-md lg:shadow-black lg:shadow-md">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="hidden py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">ID</div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Anchor</div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Name</div>
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Sender</div>
                  </th>
                  {/* TODO: add a filter/sort by network feature */}
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">
                      Network
                      <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              {/* Create Address.tsx component */}
              <tbody className="divide-y divide-gray-200 bg-white">
                {props.profiles.map((profile) => (
                  <tr key={profile.anchor}>
                    <td className="hidden w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0 lg:table-cell">
                      {convertBytesToShortString(profile.id)}
                    </td>
                    {/* Link to explorer */}
                    <td className="w-full max-w-0 py-4 pl-1 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                      <div>
                        <Address
                          address={profile.anchor}
                          chainId={profile.chainId}
                        />
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {profile.name}
                    </td>
                    <td className="hidden py-4 text-sm text-gray-500 lg:table-cell">
                      <div>
                        <Address
                          address={profile.sender}
                          chainId={profile.chainId}
                        />
                      </div>
                    </td>
                    {/* TODO: add a filter/sort by network feature */}
                    <td className="px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {convertChainIdToNetworkName(profile.chainId)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
