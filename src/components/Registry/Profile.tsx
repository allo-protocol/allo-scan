import { ProfileContext } from "@/Context/ProfileContext";
import { useContext } from "react";

const ProfileContent = () => {
  const { profiles } = useContext(ProfileContext);

  return <ProfileTable />;
};

const ProfileTable = () => {
  const profileData: TProfile[] = [
    {
      id: "0xAEc6...Be27",
      anchor: "0xAEc6...BBe27",
      name: "Developer Profile",
      chainId: 5,
      sender: "0x1fD0...cA42",
    },
  ];

  const profiles = profileData;

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-2">
      <div className="sm:flex flex flex-col items-center">
        <div className="sm:flex-auto flex-auto">
          <h1 className="text-center text-base font-semibold leading-6 text-gray-900">
            Profiles
          </h1>
          <p className="mt-2 text-center text-sm text-gray-700">
            A list of all the profiles in the registry
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8  border rounded-md shadow-black shadow-md">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
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
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Name</div>
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Sender</div>
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">Chain ID</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {profiles.map((profile) => (
                  <tr key={profile.anchor}>
                    <td className="hidden w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0 lg:table-cell">
                      {profile.id}
                    </td>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                      {profile.anchor}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {profile.name}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {profile.sender}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {profile.chainId}
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
