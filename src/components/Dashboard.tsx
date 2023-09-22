"use client";

import { NetworkContext } from "@/Context/NetworkContext";
import { getNetworksBySlug } from "@/utils/networks";
import { useContext } from "react";
import { Address, AddressResponsive, Hash } from "./Address";
import Table from "./Table";
import { TAlloTransactionLog, TTableData } from "@/types/types";
import { convertChainIdToNetworkName } from "@/utils/utils";
import Status from "./Status";

export const Dashboard = ({
  alloTransactions,
}: {
  alloTransactions: TAlloTransactionLog[];
}) => {
  const { network } = useContext(NetworkContext);
  const networkData = getNetworksBySlug(network);

  const dataCore: TTableData = {
    headers: ["Contract", "Address"],
    rows: Object.values(networkData.coreContracts).map((contract) => {
      return [
        contract.name,
        // eslint-disable-next-line react/jsx-key
        <AddressResponsive
          address={contract.address}
          chainId={Number(networkData.id)}
        />,
      ];
    }),
  };

  const dataStrategy: TTableData = {
    headers: ["Contract", "Address"],
    rows: Object.values(networkData.strategyContracts).map((contract) => {
      return [
        contract.name,
        // eslint-disable-next-line react/jsx-key
        <AddressResponsive
          address={contract.address}
          chainId={Number(networkData.id)}
        />,
      ];
    }),
  };

  const dataAlloTransaction: TTableData = {
    headers: [
      "",
      "Hash",
      "From",
      "To",
      "Function",
      "Block",
      "Timestamp",
      "Network",
    ],
    rows: Object.values(alloTransactions).map((alloTransaction) => {
      const statusBoolean = alloTransaction.status === "1" ? true : false;
      const date = new Date(alloTransaction.blockTimestamp);
      const transformedTimestamp = date.getTime().toString();

      return [
        <Status status={statusBoolean} />,
        <Hash
          hash={alloTransaction.hash}
          chainId={Number(alloTransaction.chainId)}
        />,
        // eslint-disable-next-line react/jsx-key
        <Address
          address={alloTransaction.fromAddress}
          chainId={Number(alloTransaction.chainId)}
        />,
        // eslint-disable-next-line react/jsx-key
        <Address
          address={alloTransaction.toAddress}
          chainId={Number(alloTransaction.chainId)}
        />,
        <div>{alloTransaction.functionName}</div>,
        alloTransaction.blockNumber,
        transformedTimestamp,
        convertChainIdToNetworkName(Number(alloTransaction.chainId)),
      ];
    }),
  };

  return (
    <div>
      <Table
        data={dataCore}
        header={"Allo-At-A-Glance"}
        description={
          "A list of all the core contracts in the registry on all supported networks"
        }
        showPagination={false}
      />
      <Table
        data={dataStrategy}
        header={"Cloneable Strategy Contracts"}
        description={
          "A list of all the strategy contracts in the registry on all supported networks"
        }
        showPagination={false}
      />
      <Table
        data={dataAlloTransaction}
        header={"Allo Transaction Log"}
        showPagination={true}
        description={""}
        rowsPerPage={8}
      />
    </div>
  );
};

export default Dashboard;
