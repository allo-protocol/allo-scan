"use client";
import { convertChainIdToNetworkName } from "@/utils/utils";
import { AddressResponsive } from "../Address";
import { TPoolDetail } from "./types";
import { MetadataProtocol } from "@/types/types";
import { TbExternalLink } from "react-icons/tb";
import JsonView from "@uiw/react-json-view";
import { ethers } from "ethers";
import Link from "next/link";

const PoolDetailPage = ({
  pool,
  metadata,
}: {
  pool: TPoolDetail;
  metadata: string;
}) => {
  const metadataObj = JSON.parse(metadata);

  console.log("the fucking pool", pool);

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-4 sm:px-0 my-10">
        <div className="flex flex-row">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {/* {pool.name} */}
            This is a test pool
          </h3>
          <p className="mt-1 ml-4 max-w-xs text-sm leading-6 text-gray-500 font-mono">
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
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Network
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {convertChainIdToNetworkName(Number(pool.chainId))}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Token
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <AddressResponsive
                address={pool.token}
                chainId={Number(pool.chainId)}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Amount
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {ethers.formatEther(pool.amount ?? 0)} {pool.tokenMetadata?.symbol ?? ""}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Creator
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <AddressResponsive
                address={pool.profile.creator}
                chainId={Number(pool.chainId)}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Metadata ({MetadataProtocol[pool.metadataProtocol]}){" "}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="flex flex-row items-center">
                {pool.metadataPointer}
                <a
                  className="ml-2"
                  // data-tip="view on explorer"
                  target="_blank"
                  href={"https://ipfs.io/ipfs/" + pool.metadataPointer}
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
