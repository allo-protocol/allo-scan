"use client";

import { Context } from "@/Context/Context";
import { getNetworks } from "@/api/networks";
import { INetwork } from "@/types/types";
import { useContext } from "react";

const SelectNetwork = () => {
  const { network, setNetwork } = useContext(Context);
  const networks: INetwork = getNetworks();

  const setNetworkHandler = (event: any) => {
    setNetwork(event.target.value);
  };

  return (
    <div>
      <select
        id="network"
        name="network"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
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
