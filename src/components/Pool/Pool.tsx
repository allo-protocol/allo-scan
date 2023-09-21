"use client";

import Table from "../Table";
import { TTableData } from "@/types/types";
import { Address } from "../Address";
import {
  convertChainIdToNetworkName,
  formatAmount,
  shortenPoolName,
} from "@/utils/utils";
import Link from "next/link";
import { TPoolDetail } from "./types";

const Pool = ({
  data,
  header,
  description,
}: {
  data: TPoolDetail[];
  header?: string;
  description?: string;
}) => {

  const tableData: TTableData = {
    headers: [
      "ID",
      "Address",
      "Token",
      "Amount",
      "Profile Name",
      "Profile Owner",
      "Network",
    ],
    rows: Object.values(data).map((pool: TPoolDetail) => {
      return [
        // eslint-disable-next-line react/jsx-key
        <Link
          className="text-green-800 hover:bg-green-200 p-2 rounded-md"
          href={`/pool/${pool.chainId}/${pool.poolId}`}
        >
          {pool.poolId}
        </Link>,
        ,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.strategy} chainId={Number(pool.chainId)} />,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.token} chainId={Number(pool.chainId)} />,
        formatAmount(pool.amount, pool.tokenMetadata?.decimals ?? 18),
        shortenPoolName(pool.profile.name),
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.profile.owner} chainId={Number(pool.chainId)} />,
        convertChainIdToNetworkName(Number(pool.chainId)),
      ];
    }),
  };

  return (
    <Table
      data={tableData}
      header={header}
      description={description}
      showPagination={true}
    />
  );
};

export default Pool;
