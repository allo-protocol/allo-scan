"use client";
// eslint-disable-file react/jsx-key
import Table from "../Table";
import { TTableData } from "@/types/types";
import { Address } from "../Address";
import {
  convertChainIdToNetworkName,
  formatAmount,
  shortenPoolName,
} from "@/utils/utils";
import Link from "next/link";
// import Status from "../Status";

const Pool = (data: any) => {
  const tableData: TTableData = {
    name: "Pools",
    description:
      "A list of all the ools in the registry on all supported networks",
    headers: [
      "ID",
      "Address",
      // "Name",
      "Token",
      "Amount",
      // "Status",
      "Profile Name",
      "Profile Owner",
      "Network",
    ],
    rows: Object.values(data.data).map((pool: any) => {
      return [
        <Link
          className="text-green-800 hover:bg-green-200 p-2 rounded-md"
          href={`/pool/${pool.chainId}/${pool.poolId}`}
        >
          {pool.poolId}
        </Link>,
        ,
        <Address address={pool.strategy} chainId={pool.chainId} />,
        // pool.name, FIXME: THE API DOES NOT RETURN THE POOL NAME
        // shortenPoolName("Pool Name is really long"),
        <Address address={pool.token} chainId={pool.chainId} />,
        formatAmount(pool.amount),
        shortenPoolName(pool.profile.name),
        <Address address={pool.profile.owner} chainId={pool.chainId} />,
        convertChainIdToNetworkName(pool.chainId),
      ];
    }),
  };

  return <Table data={tableData} />;
};

export default Pool;
