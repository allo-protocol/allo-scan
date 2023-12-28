"use client";

import { convertChainIdToNetworkName } from "@/utils/utils";
import { AddressResponsive, truncatedString } from "../Address";
import { TProfileDetail } from "./types";
import { MetadataProtocol, TListProps } from "@/types/types";
import Link from "next/link";
import Pool from "../Pool/Pool";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import List from "../List";
import Metadata from "../Metadata";

const ProfileDetail = ({
  profile,
  metadataObj,
}: {
  profile: TProfileDetail;
  metadataObj: Object;
}) => {
  const isMobile = useMediaQuery(768);

  const listProps: TListProps[] = [
    {
      label: "Network",
      value: convertChainIdToNetworkName(profile.chainId),
    },
    {
      label: "Nonce",
      value: profile.nonce.toString(),
    },
    {
      label: "Anchor",
      value: (
        <AddressResponsive address={profile.anchor} chainId={profile.chainId} />
      ),
    },
    {
      label: "Creator",
      value: (
        <AddressResponsive
          address={profile.creator}
          chainId={profile.chainId}
        />
      ),
    },
    {
      label: "Owner",
      value: (
        <AddressResponsive address={profile.owner} chainId={profile.chainId} />
      ),
    },
    {
      label: "Members",
      value: (
        <ul role="list" className="">
          {profile.role.roleAccounts.map((account, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-4 text-sm leading-6"
            >
              <div className="flex w-0 flex-1 items-center">
                <div className="flex">
                  <span className="font-medium">
                    <AddressResponsive
                      address={account.accountId}
                      chainId={profile.chainId}
                    />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Created at",
      value: new Date(profile.createdAt).toLocaleString(),
    },
    {
      label: "Updated at",
      value: new Date(profile.updatedAt).toLocaleString(),
    },
    {
      label: `Metadata (${MetadataProtocol[profile.metadataProtocol]})`,
      value: <Metadata isMobile={isMobile} metadata={
        {
          pointer: profile.metadataPointer,
          protocol: profile.metadataProtocol,
        }
      } 
      metadataObj={metadataObj} />,
    },
  ];

  return (
    <div className="pb-10">
      <div className="flex flex-row items-center justify-between px-4 sm:px-0 my-10">
        <div className="flex flex-col">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {profile.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 font-mono">
            {isMobile ? truncatedString(profile.profileId) : profile.profileId}
          </p>
        </div>
        <div>
          <Link href={`/profile/`}>
            <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Back
            </button>
          </Link>
        </div>
      </div>

      <List data={listProps} />

      {profile.pools.length > 0 && (
        <>
          <div className="text-sm font-medium leading-6 text-gray-900">
            Pools
          </div>
          <Pool data={profile.pools} />
        </>
      )}
    </div>
  );
};

export default ProfileDetail;
