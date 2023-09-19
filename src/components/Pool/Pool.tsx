"use client";
import Table from "../Table";
import { TTableData } from "@/types/types";
import { Address, convertBytesToShortString } from "../Address";
import { convertChainIdToNetworkName, formatAmount, shortenPoolName } from "@/utils/utils";
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
      "Strategy",
      "Network",
    ],
    rows: Object.values(data.data).map((pool: any) => {
      return [
        pool.poolId,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.strategy} chainId={pool.chainId} />,
        // pool.name, FIXME: THE API DOES NOT RETURN THE POOL NAME
        // shortenPoolName("Pool Name is really long"),
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.token} chainId={pool.chainId} />,
        // eslint-disable-next-line react/jsx-key
        formatAmount(pool.amount),
        // eslint-disable-next-line react/jsx-key
        shortenPoolName(pool.profile.name),
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.profile.owner} chainId={pool.chainId} />,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.strategy} chainId={pool.chainId} />,
        // eslint-disable-next-line react/jsx-key
        convertChainIdToNetworkName(pool.chainId),
      ];
    }),
  };

  return <Table data={tableData} />;
};

export default Pool;
