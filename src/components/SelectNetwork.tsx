"use client";

import { getNetworks } from "@/utils/networks";
import { INetwork, Slug, TNetworkData } from "@/types/types";

const SelectNetwork = (props: {}) => {
  const networks: INetwork = getNetworks();

  return (
    <div>
      <select
        id="network"
        name="network"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
        defaultValue={Slug.GOERLI}
      >
        {Object.keys(networks).map((network: string) => {
          const _network = networks[Number(network)];
          return (
            <option key={_network.slug} value={_network.slug}>
              {_network.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectNetwork;
