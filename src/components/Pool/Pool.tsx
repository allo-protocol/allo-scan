"use client";
import Table from "../Table";
import { TTableData } from "@/types/types";
import { Address, convertBytesToShortString } from "../Address";
import { convertChainIdToNetworkName, formatAmount, shortenPoolName } from "@/utils/utils";
import Status from "../Status";

const Pool = (data: any) => {
  const testPools = [
    {
      id: 1,
      address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
      name: "DonationVotingMerklePayout",
      token: "0x0000000000000000000000000000000000000000",
      amount: 500,
      status: true,
      profileOwner: "0x0000000000000000000000000000000000000000",
      strategyIdentifier:
        "0xd71275a698bbfb611216b5ed38a4b48cc165febd4c3da5bc13bc8398792e6bca",
      chainId: 5,
    },
    {
      id: 2,
      address: "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27",
      name: "DonationVotingMerklePayout",
      token: "0x0000000000000000000000000000000000000000",
      amount: 20,
      status: false,
      profileOwner: "0x0000000000000000000000000000000000000000",
      strategyIdentifier:
        "0xd71275a698bbfb611216b5ed38a4b48cc165febd4c3da5bc13bc8398792e6bca",
      chainId: 5,
    },
  ];

  const tableData: TTableData = {
    name: "Pools",
    description:
      "A list of all the ools in the registry on all supported networks",
    headers: [
      "ID",
      "Address",
      "Name",
      "Token",
      "Amount",
      "Status",
      "Profile Owner",
      "Identifier",
      "Network",
    ],
    rows: Object.values(data.data).map((pool: any) => {
      console.log("pool", pool);
      return [
        pool.poolId,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.strategy} chainId={pool.chainId} />,
        // pool.name, FIXME: THE API DOES NOT RETURN THE POOL NAME
        shortenPoolName("Pool Name is really long"),
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.token} chainId={pool.chainId} />,
        formatAmount(pool.amount),
        // eslint-disable-next-line react/jsx-key
        <Status status={true} />, // FIXME: THE API DOES NOT RETURN THE POOL STATUS
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.profile.owner} chainId={pool.chainId} />,
        convertBytesToShortString(pool.strategy),
        convertChainIdToNetworkName(pool.chainId),
      ];
    }),
  };

  return <Table data={tableData} />;
};

export default Pool;
