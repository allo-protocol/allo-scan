"use client";

import { NetworkContext } from "@/Context/NetworkContext";
import { getNetworksBySlug } from "@/utils/networks";
import { useContext } from "react";
import { AddressResponsive, Hash } from "./Address";
import Table from "./Table";
import {  TTableData } from "@/types/types";

export const Contracts = () => {
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
    </div>
  );
};

export default Contracts;
