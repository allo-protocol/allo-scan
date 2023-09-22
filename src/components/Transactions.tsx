"use client";
/* eslint-disable react/jsx-key */

import { Address, Hash, truncatedString } from "./Address";
import Table from "./Table";
import { TAlloTransactionLog, TTableData } from "@/types/types";
import { convertChainIdToNetworkName } from "@/utils/utils";
import Status from "./Status";

export const Transactions = ({
  alloTransactions,
}: {
  alloTransactions: TAlloTransactionLog[];
}) => {
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
      const transformedTimestamp = date.toLocaleString(); //date.getTime().toString();

      return [
        <Status status={statusBoolean} />,
        <Hash
          hash={alloTransaction.hash}
          chainId={Number(alloTransaction.chainId)}
        />,
        <Address
          address={alloTransaction.fromAddress}
          chainId={Number(alloTransaction.chainId)}
        />,
        <Address
          address={alloTransaction.toAddress}
          chainId={Number(alloTransaction.chainId)}
        />,
        truncatedString(alloTransaction.functionName),
        alloTransaction.blockNumber,
        transformedTimestamp,
        convertChainIdToNetworkName(Number(alloTransaction.chainId)),
      ];
    }),
  };

  return (
    <Table
      data={dataAlloTransaction}
      header={"Allo Transaction Log"}
      showPagination={true}
      description={""}
      rowsPerPage={20}
    />
  );
};

export default Transactions;
