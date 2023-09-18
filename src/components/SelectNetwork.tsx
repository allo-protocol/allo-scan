"use client";

import { NetworkContext } from "@/context/NetworkContext";
import { getNetworks } from "@/api/networks";
import { INetwork, Slug, TNetworkData } from "@/types/types";
import { useContext } from "react";

const SelectNetwork = (props: {}) => {
  const { network, setNetwork } = useContext(NetworkContext);
  const networks: INetwork = getNetworks();

  const setNetworkHandler = (event: any) => {
    setNetwork(event.target.value);
  };

  return (
    <div>
      <select
        id="network"
        name="network"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
        defaultValue={Slug.GOERLI}
      >
        {Object.keys(networks).map((_network: any) => (
          <option key={_network.slug} value={_network.slug}>
            {_network.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectNetwork;
