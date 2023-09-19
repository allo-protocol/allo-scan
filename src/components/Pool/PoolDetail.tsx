"use client";
import { convertChainIdToNetworkName } from "@/utils/utils";
import { AddressResponsive } from "../Address";
import { TPoolDetail } from "./types";
import { MetadataProtocol } from "@/types/types";
import { TbExternalLink } from "react-icons/tb";
import JsonView from "@uiw/react-json-view";
import { ethers } from "ethers";

const PoolDetailPage = ({
  pool,
  metadata,
}: {
  pool: TPoolDetail;
  metadata: string;
}) => {
  const metadataObj = JSON.parse(metadata);

  return (
    <div>
      <div className="px-4 sm:px-0 my-10">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {/* {pool.name} */}
          "Pool Name"
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 font-mono">
          {pool.poolId}
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Network
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {convertChainIdToNetworkName(pool.chainId)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Token
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pool.token}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Amount
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {ethers.formatEther(pool.amount.toString())}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Creator
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <AddressResponsive
                address={pool.creator}
                chainId={pool.chainId}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Metadata ({MetadataProtocol[pool.metadata.protocol]}){" "}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="flex flex-row items-center">
                {pool.metadata.pointer}
                <a
                  className="ml-2"
                  // data-tip="view on explorer"
                  target="_blank"
                  href={"https://ipfs.io/ipfs/" + pool.metadata.pointer}
                >
                  <TbExternalLink />
                </a>
              </div>
            </dd>
          </div>
        </dl>
        <div className="pb-6">
          <JsonView
            value={metadataObj}
            shortenTextAfterLength={120}
            collapsed={2}
          />
        </div>
      </div>
    </div>
  );
};

export default PoolDetailPage;
