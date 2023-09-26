"use client";

import { amountString, convertChainIdToNetworkName } from "@/utils/utils";
import { AddressResponsive, truncatedString } from "../Address";
import { StrategyId, TPoolDetail } from "./types";
import { MetadataProtocol, TListProps } from "@/types/types";
import { ethers } from "ethers";
import Link from "next/link";
import { getNetworks } from "@/utils/networks";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import List from "../List";
import Metadata from "../Metadata";
import RfpDetails from "./Strategies/RfpDetails";

const PoolDetailPage = ({
  pool,
  metadataObj,
}: {
  pool: TPoolDetail;
  metadataObj: Object;
}) => {
  const isMobile = useMediaQuery(768);

  const listProps: TListProps[] = [
    {
      label: "Strategy",
      value: (
        <AddressResponsive
          address={pool.strategy}
          chainId={Number(pool.chainId)}
        />
      ),
    },
    {
      label: "Network",
      value: convertChainIdToNetworkName(Number(pool.chainId)),
    },
    {
      label: "Token",
      value: (
        <AddressResponsive
          address={pool.token}
          chainId={Number(pool.chainId)}
        />
      ),
    },
    {
      label: "Amount",
      value: amountString(
        pool.amount,
        pool.tokenMetadata,
        Number(pool.chainId),
      ),
    },
    {
      label: "Creator",
      value: (
        <AddressResponsive
          address={pool.profile.creator}
          chainId={Number(pool.chainId)}
        />
      ),
    },
    {
      label: "Profile",
      value: (
        <>
          {pool.profile.name}

          <Link href={`/profile/${pool.chainId}/${pool.profile.profileId}`}>
            <br />
            <span className="font-mono text-green-900">
              {isMobile
                ? truncatedString(pool.profile.profileId)
                : pool.profile.profileId}{" "}
            </span>
          </Link>
        </>
      ),
    },
    {
      label: "Created at",
      value: new Date(pool.createdAt).toLocaleString(),
    },
    {
      label: "Updated at",
      value: new Date(pool.updatedAt).toLocaleString(),
    },
    {
      label: "Metadata (" + MetadataProtocol[pool.metadataProtocol] + ")",
      value: (
        <Metadata
          isMobile={isMobile}
          metadata={{
            pointer: pool.metadataPointer,
            protocol: pool.metadataProtocol,
          }}
          metadataObj={metadataObj}
        />
      ),
    },
  ];

  const renderDetails = () => {
    if (!pool.strategyDetails) return null;

    switch (pool.strategyDetails.strategyId) {
      case StrategyId.RFP:
        return (
          <RfpDetails
            details={pool.strategyDetails.details}
            tokenMetadata={pool.tokenMetadata}
            chainId={Number(pool.chainId)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-4 sm:px-0 my-10">
        <div className="flex flex-row">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Pool ID:
          </h3>
          <p className="mt-0.5 ml-4 max-w-xs text-sm leading-6 text-gray-500 font-mono">
            {pool.poolId}
          </p>
        </div>
        <div>
          <Link href={`/pool/`}>
            <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Back
            </button>
          </Link>
        </div>
      </div>
      <List data={listProps} />
      {renderDetails()}
    </div>
  );
};

export default PoolDetailPage;
