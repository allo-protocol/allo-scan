import { ProfileContext } from "@/Context/ProfileContext";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useContext } from "react";

const Profile = () => {
  const { profiles } = useContext(ProfileContext);

  return <ProfileTable />;
};

const ProfileTable = () => {
  const profileData: Profile[] = [
    {
      anchor: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
      role: "Member",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">
                      Anchor
                      <span className="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <div className="group inline-flex">
                      Role
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
              <tbody className="divide-y divide-gray-200 bg-white">
                {profiles.map((profile) => (
                  <tr key={profile.anchor}>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                      <div className="flex items-center">
                        <Image
                          className="mr-1"
                          src={profile.image}
                          alt={profile.anchor}
                          width={24}
                          height={24}
                        />
                        {profile.anchor}
                      </div>
                      <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-1 truncate text-gray-700">
                          {profile.role}
                        </dd>
                      </dl>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {profile.role}
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

export default Profile;
