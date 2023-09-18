import { PoolContext } from "@/context/PoolContext";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import Table from "../Table";
import { TTableData } from "@/types/types";
import { Address, convertBytesToShortString } from "../Address";
import { convertChainIdToNetworkName } from "@/utils";
import Status from "../Status";

const Pool = () => {
  // const { pools } = useContext(PoolContext);

  const pools = [
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

  const data: TTableData = {
    name: "Pools",
    description:
      "A list of all the pools in the registry on all supported networks",
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
    rows: pools.map((pool) => {
      return [
        pool.id,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.address} chainId={pool.chainId} />,
        pool.name,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.token} chainId={pool.chainId} />,
        pool.amount,
        // eslint-disable-next-line react/jsx-key
        <Status status={pool.status} />,
        // eslint-disable-next-line react/jsx-key
        <Address address={pool.profileOwner} chainId={pool.chainId} />,
        convertBytesToShortString(pool.strategyIdentifier),
        convertChainIdToNetworkName(pool.chainId),
      ];
    }),
  };

  return <Table data={data} />;
};

export default Pool;
