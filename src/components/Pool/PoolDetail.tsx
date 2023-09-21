"use client";

import { convertChainIdToNetworkName } from "@/utils/utils";
import { AddressResponsive, truncatedString } from "../Address";
import { TPoolDetail } from "./types";
import { MetadataProtocol } from "@/types/types";
import { TbExternalLink } from "react-icons/tb";
import JsonView from "@uiw/react-json-view";
import { ethers } from "ethers";
import Link from "next/link";
import { Loading } from "../Loading";
import { getNetworks } from "@/utils/networks";


// {
//     "pool": {
//         "poolId": "1",
//         "chainId": "5",
//         "token": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//         "amount": "0",
//         "strategy": "0x1a749965c9142c873298362333ed2545d4edd2da",
//         "metadataProtocol": 1,
//         "metadataPointer": "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
//         "tokenMetadata": {
//             "name": null,
//             "symbol": null,
//             "decimals": null
//         },
//         "profile": {
//             "name": "Whoop Whoop",
//             "owner": "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
//             "anchor": "0x4157199a3dfae237b67aba88b593735aea9d5d33",
//             "creator": "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce"
//         }
//     }
// }


const PoolDetailPage = ({
  pool,
  poolMetadata,
}: {
  pool: TPoolDetail;
  poolMetadata: string;
}) => {
  const metadataObj: {} = JSON.parse(poolMetadata);

  console.log("the fucking pool", pool);
  console.log("Pool metadata ", poolMetadata);

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-4 sm:px-0 my-10">
        <div className="flex flex-row">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Pool ID:
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
              Strategy
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <AddressResponsive
                address={pool.strategy}
                chainId={Number(pool.chainId)}
              />
            </dd>
          </div>
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
              {ethers.formatUnits(
                pool.amount ?? 0,
                pool.tokenMetadata.decimals ?? 18,
              )}{" "}
              {pool.tokenMetadata.symbol ??
                getNetworks()[Number(pool.chainId)].symbol}
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
              Profile
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pool.profile.name}

              <Link href={`/profile/${pool.chainId}/${pool.profile.anchor}`}>
                <br />
                <span className="font-mono text-green-900">{pool.profile.profileId}</span>
              </Link>
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
