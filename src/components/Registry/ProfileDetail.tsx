"use client";
import { convertChainIdToNetworkName } from "@/utils/utils";
import { AddressResponsive } from "../Address";
import { TProfileDetails } from "./types";

const ProfileDetail = ({
  profile,
  metadata,
}: {
  profile: TProfileDetails;
  metadata: string;
}) => {
  const metadataObj = JSON.parse(metadata);

  return (
    <div>
      <div className="px-4 sm:px-0 my-10">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {profile.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 font-mono">
          {profile.id}
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Chain
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {convertChainIdToNetworkName(profile.chainId)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nonce
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {profile.nonce}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Anchor
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <AddressResponsive
                address={profile.anchor}
                chainId={profile.chainId}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Creator
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <AddressResponsive
                address={profile.sender}
                chainId={profile.chainId}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Owner
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <AddressResponsive
                address={profile.owner}
                chainId={profile.chainId}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Members
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
              <ul role="list" className="">
                {profile.members.map((member) => (
                  <li className="flex items-center justify-between py-4 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="flex">
                        <span className="font-medium">
                          <AddressResponsive
                            address={member}
                            chainId={profile.chainId}
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProfileDetail;